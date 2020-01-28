const express = require('express');
const Post = require('../models/Post');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    next(error);
  }
});

router.get('/:postId', async (req, res, next) => {
  const { postId } = req.params;
  try {
    const post = await Post.findById(postId);
    if (post) {
      res.json(post);
    } else {
      res.json({});
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
