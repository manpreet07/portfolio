import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { MemoryRouter } from "react-router-dom";

vi.mock("@/api/getAPod", () => ({
  getAPod: vi.fn(),
}));

describe("Home ", () => {
  test("mf project links should be present", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.queryByText("Mars Dashboard")).toBeInTheDocument();
  });
});
