import { render, screen } from "@testing-library/react";
import Home from "../src/components/Home";
import { MemoryRouter } from "react-router-dom";
import React from "react";
import { describe, test, expect, vi } from "vitest";

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
