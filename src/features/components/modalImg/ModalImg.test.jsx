import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useSelector, useDispatch } from "react-redux";
import { ModalImg } from "./ModalImg";
import { modalActions } from "store/slice/modal/modal-slice";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock("store/slice/modal/modal-slice", () => ({
  modalActions: {
    closeModal: jest.fn(),
  },
}));

describe("ModalImg", () => {
  const dispatchMock = jest.fn();
  useDispatch.mockReturnValue(dispatchMock);

  /* test("renders modal with name and image", () => {
    useSelector.mockReturnValueOnce("image-url");
    useSelector.mockReturnValueOnce("Image Name");

    render(<ModalImg />);

    expect(screen.getByText("Image Name")).toBeInTheDocument();
    expect(screen.getByAltText("img")).toHaveAttribute("src", "image-url");
  }); */

  test("calls toggleModal when modal is clicked", () => {
    useSelector.mockReturnValueOnce("image-url");
    useSelector.mockReturnValueOnce("Image Name");

    render(<ModalImg />);

    const modal = screen.getByTestId("modal");

    fireEvent.click(modal);

    expect(dispatchMock).toHaveBeenCalled(modalActions.closeModal());
  });
});
