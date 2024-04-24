const connection = require('../db');


// codigo para los posts***********************///////////



// Obtener todos los posts
exports.getPosts = (req, res) => {
  connection.query('SELECT * FROM posts', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
};

// Obtener un post por su ID
exports.getPostById = (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM posts WHERE id = ?', [id], (error, results) => {
    if (error) throw error;
    res.json(results[0]);
  });
};

// Crear un nuevo post
exports.createPost = (req, res) => {
  const { title, content, author, creation_date, photo_url, category } = req.body;
  connection.query('INSERT INTO posts (title, content, author, creation_date, photo_url, category) VALUES (?, ?, ?, ?, ?, ?)', 
  [title, content, author, creation_date, photo_url, category], (error, results) => {
    if (error) throw error;
    res.json({ message: 'Post creado correctamente', id: results.insertId });
  });
};

// Actualizar un post existente
exports.updatePost = (req, res) => {
  const { id } = req.params;
  const { title, content, author, creation_date, photo_url, category } = req.body;
  connection.query('UPDATE posts SET title = ?, content = ?, author = ?, creation_date = ?, photo_url = ?, category = ? WHERE id = ?', 
  [title, content, author, creation_date, photo_url, category, id], (error, results) => {
    if (error) throw error;
    res.json({ message: 'Post actualizado correctamente' });
  });
};

// Eliminar un post
exports.deletePost = (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM posts WHERE id = ?', [id], (error, results) => {
    if (error) throw error;
    res.json({ message: 'Post eliminado correctamente' });
  });
};

