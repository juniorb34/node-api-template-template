//inicialização da aplicação
import http from 'http';
import app from './app';
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log('Server on port 3000!');
});
