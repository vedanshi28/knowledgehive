const express = require('express');
const router = express.Router();
const Post = require('../model/postSchema');

//get all posts
router.get('/fetch', (req, res) => {
  Post.find()
    .then((posts) => {
      res.json({ success: true, data: posts });
    })
    .catch((err) => {
      res.status(401).json({ success: false, err });
      console.log(err);
    });
});

//add new Post
router.post('/add', async (req, res) => {
  try {
    await Post.create({
      email: req.body.email,
      postId: req.body.postId,
      postTitle: req.body.postTitle,
      postDesc: req.body.postDesc,
    });
    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.json({ success: false, err});
  }
});

//delete post
router.delete('/delete/:postId', async (req, res) => {
  const { postId } = req.params;

  try {
    const deletedPost = await Post.findOneAndDelete({"postId":postId});

    if (!deletedPost) {
      return res.status(404).json({ success: false, message: 'Post not found.' });
    }

    res.json({ success: true, deletedPost });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, err });
  }
});

module.exports = router;