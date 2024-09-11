import request from 'supertest'; // Importa o supertest para testes de API
import app from '../src/app.js'; // Importa o aplicativo Express

describe('Game API', () => {
  it('should fetch all games', async () => {
    const res = await request(app).get('/api/games');
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should create a new game', async () => {
    const res = await request(app)
      .post('/api/games')
      .send({ title: 'New Game', edition: 'Edition Number', price: 19.99 });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('title', 'New Game');
  });

  it('should fetch a game by ID', async () => {
    const res = await request(app).get('/api/games/1');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', 1);
  });

  it('should update a game by ID', async () => {
    const res = await request(app)
      .put('/api/games/1')
      .send({ title: 'Updated Game', edition: 'Updated edition', price: 29.99 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('title', 'Updated Game');
  });

  it('should delete a game by ID', async () => {
    const res = await request(app).delete('/api/games/1');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Game deleted');
  });
});
