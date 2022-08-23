import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import JestUnitTestPage from "../../pages/34-03-jest-unit-test-snapshot";

it("기존 사진이랑 비뀐게 없는지 비교해보자-스냅샷테스트", () => {
  const result = render(<JestUnitTestPage />);
  expect(result.container).toMatchSnapshot();
});
