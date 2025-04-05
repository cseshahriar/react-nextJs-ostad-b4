import jsonServer from 'json-server';
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3001, () => {
  console.log('JSON Server is running on http://localhost:3000');
});

/**
npx json-server module-11/efficent-data-fetch-and-context-ap
i/src/server/db.json
http://localhost:3000/todos
http://localhost:3000/total
http://localhost:3000/skip
http://localhost:3000/limit
 */