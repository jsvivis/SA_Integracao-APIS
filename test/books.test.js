import request from 'supertest'; // Importa o supertest para testes de API
import app from '../src/app.js'; // Importa o aplicativo Express

describe('Book API', () => {
  it('should fetch all books', async () => {
    const res = await request(app).get('/api/books');
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should create a new book', async () => {
    const res = await request(app)
      .post('/api/books')
      .send({ title: 'New Book', author: 'Author Name', price: 19.99 });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('title', 'New Book');
  });

  it('should fetch a book by ID', async () => {
    const res = await request(app).get('/api/books/1');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', 1);
  });

  it('should update a book by ID', async () => {
    const res = await request(app)
      .put('/api/books/1')
      .send({ title: 'Updated Book', author: 'Updated Author', price: 29.99 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('title', 'Updated Book');
  });

  it('should delete a book by ID', async () => {
    const res = await request(app).delete('/api/books/1');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Book deleted');
  });
});
