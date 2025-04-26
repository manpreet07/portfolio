import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";
import { MemoryRouter } from "react-router-dom";

describe("navBar", () => {
  test("links should be present", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(screen.queryByText("LinkedIn")).toBeInTheDocument();
    expect(screen.queryByText("Github")).toBeInTheDocument();
  });
});
