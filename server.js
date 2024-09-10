import express from 'express';
import path from 'path';
import jwt from 'jsonwebtoken';
import { fileURLToPath } from 'url';
import { createBook, getAllBooks, getBookById, updateBook, deleteBook } from './controllers/booksController.js'; // Atualizar o caminho conforme a sua estrutura

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const secretKey = 'your_secret_key'; // Mantenha uma chave secreta segura

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para autenticação
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.sendStatus(403);

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// Rotas de livros
app.get('/api/books', getAllBooks);
app.post('/api/books', authenticateToken, createBook);
app.get('/api/books/:id', getBookById);
app.put('/api/books/:id', authenticateToken, updateBook);
app.delete('/api/books/:id', authenticateToken, deleteBook);

// Login
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (!user) {
        return res.status(404).send('Usuário não cadastrado');
    }
    if (user.password !== password) {
        return res.status(401).send('Senha errada');
    }
    const accessToken = jwt.sign({ name: username }, secretKey);
    res.json({ accessToken });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
