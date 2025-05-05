
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
      },
   name: { type: String, required: true },
  email: { type: String, required: true, unique: true }
  
  
});

module.exports = mongoose.model('Admin', adminSchema);
