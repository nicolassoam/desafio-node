import app from './app';
const port = process.env.PORT || 3333;


app.listen(port, () => {
  console.log(`O servidor foi inicializado em http://localhost:${port}`);
});
