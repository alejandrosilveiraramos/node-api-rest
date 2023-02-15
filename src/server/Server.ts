import  express from 'express';



const server = express();

server.get('/', (req, res) => {
  return res.send('Hey, Dev!');
});



export { server };