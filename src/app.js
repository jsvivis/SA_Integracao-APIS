import express from 'express'; // Importa o Express
import bookRouter from './routes/booksRoutes.js'; // Corrija o caminho para o roteador de livros

const app = express(); // Cria uma instância do Express
app.use(express.json()); // Middleware para parsear JSON
app.use('/api/books', bookRouter); // Define a rota base para livros

export default app; // Exporta o aplicativo Express
