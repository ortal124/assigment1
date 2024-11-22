const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: { type: String, required: true },  
  senderId: { type: String, required: true },
  postId: { type: Schema.Types.ObjectId,  required: true } 
}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);
