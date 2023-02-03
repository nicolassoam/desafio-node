import app from './routes.js';
const port = process.env.PORT || 3333;


app.listen(port, () => {
  console.log(`O servidor foi inicializado em http://localhost:${port}`);
});
