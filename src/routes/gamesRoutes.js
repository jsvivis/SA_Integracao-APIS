import express from 'express'; // Importa o Express
import { createGame, getAllGames, getGameById, updateGame, deleteGame } from '../controllers/gamesController.js'; // Corrija o caminho conforme a sua estrutura

const router = express.Router(); // Cria um roteador do Express

router.post('/', createGame); // Rota para criar um novo jogo
router.get('/', getAllGames); // Rota para obter todos os jogos
router.get('/:id', getGameById); // Rota para obter um jogo pelo ID
router.put('/:id', updateGame); // Rota para atualizar um jogo pelo ID
router.delete('/:id', deleteGame); // Rota para deletar um jogo pelo ID

export default router; // Exporta o roteador
