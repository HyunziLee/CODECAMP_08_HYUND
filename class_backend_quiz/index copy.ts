//여기가 API 메인 소스코드

import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

// const { ApolloServer, gql } = require('apollo-server'); //옛날 방식 import = commonjs방식
import { ApolloServer, gql } from "apollo-server"; // 최신방식 import =module 방식

//DOCS
const typeDefs = gql`
  # 타입 만들기 - type은 리턴 타입 정의, input은 자료 넣을 때
  type Board {
    number: Int
    writer: String
    title: String
    contents: String
  }
  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: [Board]
  }
  type Mutation {
    # createBoard(writer: String, title: String, contents: String): String #연습용 example 방식
    createBoard(createBoardInput: CreateBoardInput!): String #실무용 backend08 방식
  }
`;

// API
const resolvers = {
  Query: {
    fetchBoards: async () => {
      const result = await Board.find();
      console.log(result);
      return result;
    },
  },

  Mutation: {
    createBoard: async (_: any, args: any) => {
      await Board.insert({
        ...args.createBoardInput,

        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });
      // 수정할 경우
      // Board.update({number: 3},{writer:"영의"}) //앞에 {}는 조건, 뒤에 {}는 바꿀 거 => 3번 게시물의 작성자를 영희로 바꿔죠
      // 삭제할 경우
      // Board.delete({number: 3}) =>3번 게시글을 삭제해죠

      // 실제 실무는 삭제하지 않고, 조건문으로 유저에게 보여지는 유무
      // Board.update({number: 3},{isDeleted: true})
      // Board.update({number: 3},{deletedAt: new Date()})
      return "게시물 등록에 성공했습니다.";
    },
    // updateBoard: ()=>{

    // }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
});

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.240.160",
  port: 5023,
  username: "postgres",
  password: "postgres2022",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [Board],
});

// .then => 성공했을 때 안에 함수 실행 시켜주는거임
AppDataSource.initialize().then(() => {
  console.log("DB 연결 성공");
});

// listen(port번호) listen()안에 값 있으면 그 포트로 열림, 없으면 기본인 3000으로 열림
server.listen(4000).then(({ url }) => {
  console.log(`서버연결 성공`);
});
