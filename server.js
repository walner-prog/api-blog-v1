// server.js

const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const routes = require('./routes');


// Middleware
app.use(express.json());
app.use(cors());
// Rutas de la API
//http://localhost:3000/api/posts
app.use('/api/', routes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
