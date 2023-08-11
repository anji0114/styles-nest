// import { render, fireEvent, screen } from "@testing-library/react";
// import { Header } from ".";

// describe("Headerコンポーネント", () => {
//   test("propsが受け取れる", () => {
//     render(<Header title="aaaa" />);

//     // タイトルが正しく表示されていることをチェック
//     expect(screen.getByRole("aaaa")).toBeInTheDocument();
//   });

//   it("handles menu click events", () => {
//     const { getByText } = render(<Header title="aaaa" />);

//     fireEvent.click(getByText("on"));
//     expect(getByText("bbb")).toBeInTheDocument();
//   });
// });
