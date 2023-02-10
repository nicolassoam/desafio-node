-- DropForeignKey
ALTER TABLE "Pedidos" DROP CONSTRAINT "Pedidos_id_restaurante_fkey";

-- AddForeignKey
ALTER TABLE "Pedidos" ADD CONSTRAINT "Pedidos_id_restaurante_fkey" FOREIGN KEY ("id_restaurante") REFERENCES "Restaurantes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
