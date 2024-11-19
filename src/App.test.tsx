import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("sanity check", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });

  it("renders tsx", () => {
    render(<App />);

    expect(screen.getByText("PowerTrade Web Interview Q4 2024")).toBeVisible();
    expect(screen.getByText("Test ne")).toBeVisible();
  });
});
