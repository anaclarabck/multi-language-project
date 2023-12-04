import React from "react";
import { render, screen } from "@testing-library/react";
import LanguageSwitcher from "./LanguageSwitcher";
import "@testing-library/jest-dom";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));
jest.mock("next-intl", () => ({
  useLocale: jest.fn(),
}));

describe("LanguageSwitcher", () => {
  const mockUsePathname = require("next/navigation").usePathname;
  const mockUseLocale = require("next-intl").useLocale;

  it("should render language buttons", () => {
    mockUsePathname.mockReturnValue("/current-path");
    mockUseLocale.mockReturnValue("en");
    render(<LanguageSwitcher />);
    expect(screen.getByText("EN")).toBeInTheDocument();
    expect(screen.getByText("PT")).toBeInTheDocument();
  });

  it("should highlight the current locale", () => {
    mockUsePathname.mockReturnValue("/current-path");
    mockUseLocale.mockReturnValue("en");
    render(<LanguageSwitcher />);
    expect(screen.getByText("EN")).toHaveClass("MuiButton-outlined");
  });

  it("should not highlight the current locale", () => {
    mockUsePathname.mockReturnValue("/current-path");
    mockUseLocale.mockReturnValue("pt");
    render(<LanguageSwitcher />);
    expect(screen.queryByText("EN")).not.toHaveClass("MuiButton-outlined");
  });
});
