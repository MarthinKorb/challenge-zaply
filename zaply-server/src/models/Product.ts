import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("products")
export default class Product {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  image: string;

  @Column()
  name: string;

  @Column()
  categories: string;

  @Column()
  price: number;

  @Column()
  brand: string;
}
