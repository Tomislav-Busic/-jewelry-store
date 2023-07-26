import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PostProductForm } from "./PostProductForm";

describe("PostProductForm", () => {
  const handleSubmit = jest.fn();
  const handleData = jest.fn();
  const setFile = jest.fn();
  const file = null;
  const perc = null;

  test("renders form", () => {
    render(
      <PostProductForm
        handleSubmit={handleSubmit}
        handleData={handleData}
        setFile={setFile}
        file={file}
        perc={perc}
      />
    );

    expect(screen.getByText(/Unesite novi proizvod/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Ime proizvoda")).toBeInTheDocument();
    expect(screen.getByLabelText("Učitaj sliku:")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Potvrdi" })).toBeInTheDocument();
  });
});
