const express = require('express');
const router = express.Router();
const Post = require('./models/Post');

// Ruta para obtener todos los posts
router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Ruta para obtener un post por ID
router.get('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post no encontrado' });
        }
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Ruta para crear un nuevo post
router.post('/posts', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        creation_date: req.body.creation_date,
        photo_url: req.body.photo_url,
        category: req.body.category
    });
    try {
        const newPost = await post.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Ruta para actualizar un post
router.put('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post no encontrado' });
        }
        post.title = req.body.title;
        post.content = req.body.content;
        post.author = req.body.author;
        post.creation_date = req.body.creation_date;
        post.photo_url = req.body.photo_url;
        post.category = req.body.category;
        const updatedPost = await post.save();
        res.json(updatedPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Ruta para eliminar un post
router.delete('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post no encontrado' });
        }
        await post.remove();
        res.json({ message: 'Post eliminado' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
