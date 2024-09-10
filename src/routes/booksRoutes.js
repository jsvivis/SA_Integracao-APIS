import express from 'express'; // Importa o Express
import { createBook, getAllBooks, getBookById, updateBook, deleteBook } from '../controllers/booksController.js'; // Corrija o caminho conforme a sua estrutura

const router = express.Router(); // Cria um roteador do Express

router.post('/', createBook); // Rota para criar um novo livro
router.get('/', getAllBooks); // Rota para obter todos os livros
router.get('/:id', getBookById); // Rota para obter um livro pelo ID
router.put('/:id', updateBook); // Rota para atualizar um livro pelo ID
router.delete('/:id', deleteBook); // Rota para deletar um livro pelo ID

export default router; // Exporta o roteador
