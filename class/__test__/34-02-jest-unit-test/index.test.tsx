import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import JestUnitTestPage from "../../pages/34-02-jest-unit-test";
it("내가 원하는대로 그려지는지 테스트하기", () => {
  render(<JestUnitTestPage />);

  const myText1 = screen.getByText("철수는 13살");
  expect(myText1).toBeInTheDocument();

  const myText2 = screen.getByText("철수 취미:");
  expect(myText1).toBeInTheDocument();

  const myText3 = screen.getByText("철수랑 놀러가기");
  expect(myText1).toBeInTheDocument();
});
