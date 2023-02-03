import express from 'express';
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors({
  origin: "*"
}));

app.get('/', (req, res) => {
  console.log("GET /");
  res.status(200).send("Hello World");
});

app.get('/produtos',(req, res) => {
    console.log("GET /produtos");
    res.status(200).send("Lista de produtos");
})

app.get('/produtos/:id',(req, res) => {
    console.log("GET /produtos");
    res.status(302).send("Produto");
})

app.post('/produtos/criar', (req, res) => {
    console.log("POST /produtos/criar");
    res.status(201).send("Produto criado");
})

app.put('/produtos/atualizar/:id', (req, res) => {
    console.log("POST /produtos/criar");
    res.status(200).send("Produto criado");
})

app.delete('/produtos/deletar/:id', (req, res) => {
    console.log("POST /produtos/criar");
    res.status(200).send("Produto criado");
})

export default app