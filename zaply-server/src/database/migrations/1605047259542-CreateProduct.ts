import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProduct1605047259542 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "image",
            type: "varchar",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "categories",
            type: "varchar",
          },
          {
            name: "price",
            type: "varchar",
          },
          {
            name: "brand",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products");
  }
}
