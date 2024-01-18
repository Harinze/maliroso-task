import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  image:{type:String, required:true}
});

const Product = mongoose.model('Product', productSchema);

export default Product;