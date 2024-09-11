##Explicação dos Comentários

#server.js
- Bibliotecas e Configuração Inicial: Carrega as bibliotecas necessárias e define a chave secreta para JWT.
- Middleware para JSON: Configura o middleware para parsear JSON e servir arquivos estáticos.
- Jogos e Usuários Simulados: Define dados simulados para jogos e usuários.
- Esquema de Validação de Jogos: Usa Joi para validar os dados dos jogos.
- Middleware de Autenticação: Verifica se o token JWT está presente e é válido.
- Endpoints:
    - /api/games (GET): Retorna a lista de jogos.
    - /api/games (POST): Adiciona um novo jogo (protegido por autenticação).
    - /api/login (POST): Autentica o usuário e retorna um token JWT.

#index.html
- Estrutura HTML: Define a estrutura da página com formulários para login e adição de jogos, além da lista de jogos.
- Script JavaScript:
    - fetchGames: Função para buscar e exibir a lista de jogos.
    - Login Form: Lida com o evento de submissão do formulário de login, fazendo a requisição POST e armazenando o token JWT.
    - Add Game Form: Lida com o evento de submissão do formulário de adicionar jogo, enviando o token JWT no cabeçalho.
    - Logout Button: Lida com o evento de clique no botão de logout, limpando o token JWT e resetando a interface.

Com essas explicações e comentários, você pode ajudar seus alunos a entender cada parte do código e como a integração entre o front-end e o back-end é realizada, além de aplicar boas práticas de segurança. Se precisar de mais detalhes ou ajustes, estou aqui para ajudar!
