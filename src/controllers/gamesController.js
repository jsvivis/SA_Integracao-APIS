import products from '../data/games.js'; // Corrija o caminho conforme a sua estrutura

export const createGame = (req, res) => {
  const { title, edition, price } = req.body;
  const id = products.length + 1;
  const newGame = { id, title, edition, price };
  products.push(newGame);
  res.status(201).json(newGame);
};

export const getAllGames = (req, res) => {
  res.status(200).json(products);
};

export const getGameById = (req, res) => {
  const { id } = req.params;
  const game = products.find(p => p.id == id);
  if (!game) {
    return res.status(404).json({ message: 'Game not found' });
  }
  res.status(200).json(game);
};

export const updateGame = (req, res) => {
  const { id } = req.params;
  const { title, edition, price } = req.body;
  const game = products.find(p => p.id == id);
  if (!game) {
    return res.status(404).json({ message: 'Game not found' });
  }
  game.title = title;
  game.edition = edition;
  game.price = price;
  res.status(200).json(game);
};

export const deleteGame = (req, res) => {
  const { id } = req.params;
  const gameIndex = products.findIndex(p => p.id == id);
  if (gameIndex === -1) {
    return res.status(404).json({ message: 'Game not found' });
  }
  products.splice(gameIndex, 1);
  res.status(200).json({ message: 'Game deleted' });
};
