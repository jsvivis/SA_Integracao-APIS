import products from '../data/books.js'; // Corrija o caminho conforme a sua estrutura

export const createBook = (req, res) => {
  const { title, author, price } = req.body;
  const id = products.length + 1;
  const newBook = { id, title, author, price };
  products.push(newBook);
  res.status(201).json(newBook);
};

export const getAllBooks = (req, res) => {
  res.status(200).json(products);
};

export const getBookById = (req, res) => {
  const { id } = req.params;
  const book = products.find(p => p.id == id);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  res.status(200).json(book);
};

export const updateBook = (req, res) => {
  const { id } = req.params;
  const { title, author, price } = req.body;
  const book = products.find(p => p.id == id);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  book.title = title;
  book.author = author;
  book.price = price;
  res.status(200).json(book);
};

export const deleteBook = (req, res) => {
  const { id } = req.params;
  const bookIndex = products.findIndex(p => p.id == id);
  if (bookIndex === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }
  products.splice(bookIndex, 1);
  res.status(200).json({ message: 'Book deleted' });
};
