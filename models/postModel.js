const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  content: { type: String, required: true },  
  senderId: { type: String, required: true }, 
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);
