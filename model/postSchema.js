const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  email: { type: String, required: true },
  postId: { type: String, required: true ,unique: true },
  postTitle: { type: String, required: true },
  postDesc: { type: String, required: true },
  likes: {type: Number, default:"0"},
});

module.exports = mongoose.model('post', postSchema);