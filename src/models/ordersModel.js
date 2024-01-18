// import mongoose from 'mongoose';

// const orderSchema = new mongoose.Schema({

import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }, 
  quantity: { type: Number, required: true },
  amount: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
