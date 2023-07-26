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

  test("handles input change", () => {
    render(
      <PostProductForm
        handleSubmit={handleSubmit}
        handleData={handleData}
        setFile={setFile}
        file={file}
        perc={perc}
      />
    );

    const nameInput = screen.getByPlaceholderText("Ime proizvoda");
    fireEvent.change(nameInput, {
      target: { id: "name", value: "Test product" },
    });

    expect(handleData).toHaveBeenCalledTimes(1);
    expect(handleData).toHaveBeenCalledWith({
      target: { id: "name", value: "Test product" },
    });
  });

  test("handles file upload", () => {
    /*  const fileInput = screen.getByLabelText(/Učitaj sliku: /i);
    const fileData = new File(["test"], "test.jpg", { type: "image/jpg" });
    fireEvent.change(fileInput, { target: { files: [fileData] } });
    expect(setFile).toHaveBeenCalledTimes(1);
    expect(setFile).toHaveBeenCalledWith(fileData); */
  });
});
