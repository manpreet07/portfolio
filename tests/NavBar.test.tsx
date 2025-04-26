import { render, screen } from "@testing-library/react";
import NavBar from "../src/components/NavBar";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect } from "vitest";
import React from "react";

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
