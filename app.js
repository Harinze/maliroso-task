import express from 'express';
import bodyParser from 'body-parser'
//import routes from './src/routes/index'
import 'dotenv/config'
import User from './src/models/userModel.js';
import Product from './src/models/productModel.js';
import bcrypt from 'bcrypt';
import Order from './src/models/ordersModel.js'
import connectDB from "./src/database/database.js"


connectDB()
const app = express();
const PORT = process.env.PORT
const loggedOutTokens = new Set();


app.use(express.json());
app.use(bodyParser.json());


app.get('/', (_req, res) => {
  res.send('Hello, this is your Express server using ES6 syntax!');
});

//app.use("/", routes)

  // SIGN UP ENDPOINT
app.post('/signup', async (req, res) => {
  try {
    const { username, email, password, fullname } = req.body;

    if (!username || !email || !password || !fullname) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email is already registered' });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = new User({
      username,
      email,
      password: hashedPassword,
      fullname,
    });

    await user.save();

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error('Error signing up:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id, email: user.email }, process.env.SECRET_KEY, {
      expiresIn: '1h', 
    });

    res.status(200).json({ token, message:"Login Successfully",user });
  } catch (error) {
    console.error('Error logging in:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Logout endpoint
app.post('/logout', (req, res) => {

  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (loggedOutTokens.has(token)) {
    return res.status(401).json({ error: 'Token already logged out' });
  }

  loggedOutTokens.add(token);

  res.status(200).json({ message: 'Logout successful' });
});


 // AUTHORIZATION
const verifyToken = (req, res, next) => {

  const token = req.headers.authorization?.split(' ')[1];

  if (!token || token === undefined) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Check if the token is in the loggedOutTokens set
  if (loggedOutTokens.has(token)) {
    return res.status(401).json({ error: 'Token is invalid or has been logged out' });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    req.decodedToken = decodedToken;

    next();
  } catch (error) {
    console.error('Error during token verification:', error.message);
    res.status(401).json({ error: 'Token is invalid or has expired' });
  }
};

// Place order endpoint
app.post('/place-order', verifyToken, async (req, res) => {
  try {
    const { productId, userId, quantity } = req.body;

    // Fetch the product and user
    const product = await Product.findById(productId);
    const user = await User.findById(userId);

    if (!product || !user) {
      return res.status(404).json({ error: 'Product or user not found' });
    }

    // Calculate the order amount based on the product price and quantity
    const amount = product.price * quantity;

    const order = new Order({
      product: productId,
      quantity,
      amount,
      user: userId,
    });

    await order.save();

    res.status(201).json({ message: 'Order placed successfully', order });
  } catch (error) {
    console.error('Error placing order:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Create a product
app.post('/products', verifyToken, async (req, res) => {
  try {
    const { productName, description, amount, quantity, price, image } = req.body;

    const product = new Product({
      productName,
      description,
      amount,
      quantity,
      price,
      image
    });

    await product.save();

    res.status(201).json({ message: 'Product created successfully', product });
  } catch (error) {
    console.error('Error creating product:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Get all products
app.get('/products', async (_req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Update a product
app.put('/products/:productId', verifyToken, async (req, res) => {
  try {
    const productId = req.params.productId;
    const { productName, description, amount, quantity, price } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { productName, description, amount, quantity, price, image },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
  } catch (error) {
    console.error('Error updating product:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/products/:productId', verifyToken,async (req, res) => {
  try {
    const productId = req.params.productId;

    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully', product: deletedProduct });
  } catch (error) {
    console.error('Error deleting product:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
