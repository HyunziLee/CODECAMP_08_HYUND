import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn("increment") // <- 자동 번호 매김
  number!: number;

  @Column({ type: "text" })
  name!: string;

  @Column({ type: "text" })
  detail!: string;

  @Column({ type: "text" })
  contents!: string;

  @Column({ type: "text" })
  seller!: string;

  @Column({ type: "text" })
  price!: number;

  @Column({ type: "timestamp", default: new Date(), nullable: true })
  deletedAt!: Date;
}
