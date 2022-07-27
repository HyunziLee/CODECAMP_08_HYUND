// 데이터베이스와 백엔드 연결해주기

import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.240.160",
  port: 5023,
  username: "postgres",
  password: "postgres2022",
  database: "postgres",
  // 어떤 테이블이 들어갈 것 인가
  entities: [Board],
  logging: true,
  //entities 들어간 것들을 데이터베이스와 동기화 해줍니다.
  synchronize: true,
});

AppDataSource.initialize()
  .then(() => {
    //성공시 실행
    console.log("과제완료");
  })
  .catch(() => {
    //실패시 실행
    console.log("실패");
  });
