import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { FAQ_DATA } from "@utils/dataUtils";

describe("FAQ Card Component", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("renders the card component", () => {
    const faqCard = screen.getByRole("region", { name: /faqs/i });
    expect(faqCard).toBeInTheDocument();

    const title = screen.getByText(/FAQs/i);
    expect(title).toBeInTheDocument();
  });

  it("renders all FAQ items", () => {
    FAQ_DATA.forEach((faq) => {
      const title = screen.getByText(faq.title);
      expect(title).toBeInTheDocument();
    });
  });

  it("checks aria attributes for accessibility", () => {
    FAQ_DATA.forEach((faq) => {
      const button = screen.getByTestId(`faq-button-${faq.id}`);
      const content = screen.getByTestId(`faq-content-${faq.id}`);

      expect(button).toHaveAttribute("aria-expanded", "false");
      expect(content).toHaveAttribute("aria-hidden", "true");

      fireEvent.click(button);

      expect(button).toHaveAttribute("aria-expanded", "true");
      expect(content).toHaveAttribute("aria-hidden", "false");

      fireEvent.click(button);

      expect(button).toHaveAttribute("aria-expanded", "false");
      expect(content).toHaveAttribute("aria-hidden", "true");
    });
  });
});
