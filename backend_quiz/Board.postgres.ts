import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Board extends BaseEntity {
  // 자동으로 생성되는 번호
  @PrimaryGeneratedColumn("increment")
  number!: number;

  // 데이터베이스의 타입을 임의로 바꾸고 싶다면 아래와 같이 안에 적어주시면 됩니다.
  @Column({ type: "text" })
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "text" })
  age!: number;
}
