import Button from "@/components/Button";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

// Let's test what happens when component rerenders with different props
//
// render <Button> component with label as children and loading set to false
// get the button from screen ( screen.getByRole )
// expect the textContent to be the label that it was originally rendered
// rerender <Button> and change loading to true ( rerender )
// assert that textContent is "Loading..."

test("re render with loading state", () => {});
