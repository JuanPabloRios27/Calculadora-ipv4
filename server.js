const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 80;

// Middleware para parsear JSON y formularios
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

// Ruta principal opcional (solo para probar)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Middleware 404 (si no se encuentra una ruta)
app.use((req, res, next) => {
  res.status(404);
  res.send('Service finished, please contact with the administrator!');
});

// Iniciar servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en el port ${PORT}.`);
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
