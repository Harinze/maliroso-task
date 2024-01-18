

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  fullname: { type: String, required: true },

   userId: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId },

  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
});

const User = mongoose.model('User', userSchema);

export default User;
