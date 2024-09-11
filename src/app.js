import express from 'express'; // Importa o Express
import gameRouter from './routes/gamesRoutes.js'; // Corrija o caminho para o roteador de jogos

const app = express(); // Cria uma instância do Express
app.use(express.json()); // Middleware para parsear JSON
app.use('/api/games', gameRouter); // Define a rota base para jogos

export default app; // Exporta o aplicativo Express
