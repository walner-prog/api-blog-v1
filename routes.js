// routes.js

const express = require('express');
const router = express.Router();



// codigos post****//////////
const { getPosts, getPostById, createPost, updatePost, deletePost } = require('./controllers/postController');

// Rutas
router.get('/posts', getPosts);
router.get('/posts/:id', getPostById);
router.post('/posts', createPost);
router.put('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);

module.exports = router;
