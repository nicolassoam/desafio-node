-- DropForeignKey
ALTER TABLE "Produtos" DROP CONSTRAINT "Produtos_id_restaurante_fkey";

-- AddForeignKey
ALTER TABLE "Produtos" ADD CONSTRAINT "Produtos_id_restaurante_fkey" FOREIGN KEY ("id_restaurante") REFERENCES "Restaurantes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
