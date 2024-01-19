import express from 'express';
import bodyParser from 'body-parser'
//import routes from './src/routes/index'
import jwt from 'jsonwebtoken'
import cors from 'cors'
import 'dotenv/config'
import User from './src/models/userModel.js';
import Product from './src/models/productModel.js';
import bcrypt from 'bcrypt';
import Order from './src/models/ordersModel.js'
import connectDB from "./src/database/database.js"
import mongoose from 'mongoose'; 


connectDB()
const app = express();
const PORT = process.env.PORT
const loggedOutTokens = new Set();

app.use(cors());
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

    const userId = new mongoose.Types.ObjectId();

    const user = new User({
      userId,
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

    const token = jwt.sign({ userId: user._id, email: user.email }, `${process.env.SECRET_KEY}`, {
      expiresIn: '1h', 
    });
    console.log("token",token)

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
app.post('/placeorder', verifyToken, async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.decodedToken.userId;

    const user = await User.findById(userId).populate('products');
    console.log("User's products:", user.products);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (!Array.isArray(user.products)) {
      return res.status(404).json({ error: 'User\'s products array is not valid' });
    }

    const product = user.products.find(product => 
      product && product.productId && product.productId.equals(productId)
    );

    if (!product) {
      console.log("Requested productId:", productId);
      return res.status(404).json({ error: 'Product not found in user\'s products', productId });
    }

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
app.post('/createproducts', verifyToken, async (req, res) => {
  try {
    const { productName, description, quantity, price, image } = req.body;
    const userId = req.decodedToken.userId; 

    if (!productName || !description || !quantity || !price || !image) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const product = new Product({
      productName,
      price,
      quantity,
      description,
      image,
      user: userId,
    });

    const savedProduct = await product.save();

    user.products.push(savedProduct._id);
    await user.save();

    res.status(201).json({ message: 'Product created successfully', product: savedProduct });
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

// UPDATE THE PRODUCT
app.put('/products/:productId', verifyToken, async (req, res) => {
  try {
    const { productId } = req.params;
  
    const { productName, description, quantity, price, image } = req.body;

    const userId = new mongoose.Types.ObjectId(req.decodedToken.userId);

    if (![productName, description, quantity, price, image].every(Boolean)) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const user = await User.findOne(userId);
   
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const product = await Product.findOne({productId});
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    if (!product.user.equals(userId)) {
      return res.status(403).json({ error: 'Unauthorized to update this product' });
    }

    product.set({
      productName,
      description,
      quantity,
      price,
      image,
    });

    const updatedProduct = await product.save();

    res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
  } catch (error) {
    console.error('Error updating product:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// DELETE A PRODUCT

app.delete('/products/:productId', verifyToken, async (req, res) => {
  try {
    const { productId } = req.params;
    const userId = new mongoose.Types.ObjectId(req.decodedToken.userId);

    const user = await User.findOne(userId);
    console.log("user",user)

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const product = await Product.findOne({productId });
    console.log("product",product)

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    if (!product.user || !product.user.equals(userId)) {
      return res.status(403).json({ error: 'Unauthorized to delete this product' });
    }

     await Product.deleteOne({ productId });

    res.status(200).json({ message: 'Product deleted successfully', product });
  } catch (error) {
    console.error('Error deleting product:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
