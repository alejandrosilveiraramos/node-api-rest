import { server } from './server/server';

server.listen(process.env.PORT || 3333, () => {
  console.log(`App Running PORT: ${process.env.PORT || 3333}`);
});