
const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger.json'
const endpointsFiles = ['./produto/produto-routes.ts', './restaurante/restaurante-routes.ts', './pedido/pedido-routes.ts']

const doc = {
        info: {
            version: "1.0.0",
            title: "Desafio NodeJS",
            description: "API RESTful para o desafio de NodeJS"
        },
        host: "localhost:3333",
        basePath: "/",
        schemes: ['http', 'https'],
        consumes: ['application/json'],
        produces: ['application/json'],
        tags: [
            {
                "name": "Restaurante",
                "description": "Referente ao CRUD de restaurantes e login"
            },
            {
                "name": "Produto",
                "description": "Referente ao CRUD de produtos"
            },
            {
                "name": "Pedido",
                "description": "Referente ao CRUD de pedidos"
            }
        ],
        securityDefinitions: {
            bearerAuth:{
                type: "http",
                in: "header",       
                scheme: "bearer",
                bearerFormat: "JWT",
                description:"Coloque o prefixo 'Bearer' antes do token"
            }
        },
        definitions: {
            Restaurante: {
                id: "number",
                nome: "string",
                email: "string",
                senha: "string",
                telefone: "string",
                endereco: "string",
                cidade: "string",
                produtos: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            id: "number",
                            nome: "string",
                            descricao: "string",
                            preco: "number",
                            quantidade: "number",
                            restaurante_id: "number"
                        }
                    }
                },
                pedidos: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            id: "number",
                            restaurante_id: "number",
                            produto_id: "number",
                            quantidade: "number",
                            nome_cliente: "string",
                            endereco_cliente: "string",
                            telefone_cliente: "string",
                            valor_total: "number"
                        }
                    }
                }
            },
            Produto: {
                id: "number",
                nome: "string",
                descricao: "string",
                preco: "number",
                quantidade: "number",
                restaurante_id: "number",
                pedidos: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            id: "number",
                            restaurante_id: "number",
                            produto_id: "number",
                            quantidade: "number",
                            nome_cliente: "string",
                            endereco_cliente: "string",
                            telefone_cliente: "string",
                            valor_total: "number"
                        }
                    }
                }
            },
            Pedido: {
                id: "number",
                restaurante_id: "number",
                produto_id: "number",
                quantidade: "number",
                nome_cliente: "string",
                endereco_cliente: "string",
                telefone_cliente: "string",
                valor_total: "number",
                produtos: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            id: "number",
                            nome: "string",
                            descricao: "string",
                            preco: "number",
                            quantidade: "number",
                            restaurante_id: "number"
                        }
                    }
                }
        }
    }
}
swaggerAutogen(outputFile, endpointsFiles,doc)