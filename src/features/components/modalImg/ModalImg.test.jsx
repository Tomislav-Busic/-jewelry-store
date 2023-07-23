import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
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
  const dispatch = jest.fn();
  useDispatch.mockReturnValue(dispatch);

  test("renders modal with name and image", async () => {
    useSelector.mockReturnValueOnce("image-url");
    useSelector.mockReturnValueOnce("Image Name");

    render(<ModalImg />);

    expect(
      await waitFor(() => screen.findByText("Image Name"))
    ).toBeInTheDocument();
    expect(screen.getByAltText("img")).toHaveAttribute("src", "image-url");
  });

  test("calls toggleModal when modal is clicked", () => {
    useSelector.mockReturnValueOnce("image-url");
    useSelector.mockReturnValueOnce("Image Name");

    render(<ModalImg />);

    fireEvent.click(screen.getByTestId("modal_img"));

    expect(dispatch).toHaveBeenCalledWith(modalActions.closeModal());
  });
});
