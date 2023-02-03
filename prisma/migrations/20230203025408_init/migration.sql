-- CreateTable
CREATE TABLE "Restaurantes" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,

    CONSTRAINT "Restaurantes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produtos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "quantidade" TEXT NOT NULL,
    "preco" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "id_restaurante" INTEGER NOT NULL,

    CONSTRAINT "Produtos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pedidos" (
    "id" SERIAL NOT NULL,
    "valor_total" DOUBLE PRECISION NOT NULL,
    "nome_cliente" TEXT NOT NULL,
    "cidade_cliente" TEXT NOT NULL,
    "endereco_cliente" TEXT NOT NULL,
    "telefone_cliente" TEXT NOT NULL,
    "id_restaurante" INTEGER NOT NULL,

    CONSTRAINT "Pedidos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PedidosToProdutos" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Restaurantes_email_key" ON "Restaurantes"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Pedidos_id_restaurante_key" ON "Pedidos"("id_restaurante");

-- CreateIndex
CREATE UNIQUE INDEX "_PedidosToProdutos_AB_unique" ON "_PedidosToProdutos"("A", "B");

-- CreateIndex
CREATE INDEX "_PedidosToProdutos_B_index" ON "_PedidosToProdutos"("B");

-- AddForeignKey
ALTER TABLE "Produtos" ADD CONSTRAINT "Produtos_id_restaurante_fkey" FOREIGN KEY ("id_restaurante") REFERENCES "Restaurantes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedidos" ADD CONSTRAINT "Pedidos_id_restaurante_fkey" FOREIGN KEY ("id_restaurante") REFERENCES "Restaurantes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PedidosToProdutos" ADD CONSTRAINT "_PedidosToProdutos_A_fkey" FOREIGN KEY ("A") REFERENCES "Pedidos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PedidosToProdutos" ADD CONSTRAINT "_PedidosToProdutos_B_fkey" FOREIGN KEY ("B") REFERENCES "Produtos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
