import { render, screen } from "@testing-library/react";
import Contact from "./components/Contact";
import PercentageBox from "./components/PercentageBox";

//Examples
//test to show if contact name is rendered correctly
test("renders data correctly", () => {
  const { getByTestId } = render(
    <Contact contact={{ email: "john.smith@feefo.com", name: "John Smith" }} />
  );
  expect(getByTestId("contactName")).toHaveTextContent("John Smith");
});

//test to show if contact email is rendered correctly
test("renders data correctly", () => {
  const { getByTestId } = render(
    <Contact contact={{ email: "john.smith@feefo.com", name: "John Smith" }} />
  );
  expect(getByTestId("contactEmail")).toHaveTextContent("john.smith@feefo.com");
});

//test to show if percentage is rendered correctly
test("renders data correctly", () => {
  const { getByTestId } = render(
    <PercentageBox propStyle="" desc={""} percentage={90} />
  );
  expect(getByTestId("percentage")).toHaveTextContent("90%");
});