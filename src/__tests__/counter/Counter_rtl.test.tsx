import { createRoot } from "react-dom/client";
import { beforeEach, expect, test } from "vitest";
import { act, render, screen } from "@testing-library/react";
import Counter from "@/pages/counter/Counter";
import { userEvent } from "@testing-library/user-event";

// Now let's use testing library https://testing-library.com/ -> It has implementation for widely used and known front end libraries/frameworks.
// We will be using react-testing-library ( Which is testing library implemented for React )
//
// use render from react testing library to render <Counter /> ( render )
// get buttons separately by role to avoid implementation breaking your test. Use the screen helper ( screen.getByRole )
// get initial count ( screen.getByText )
// expect the count to be 0
// click on increment button using userEvent
// assert the count
// click on the decrement button
// assert the count
//
// clean the test file by removing old cleanup logic since testing library handles it all

test("counter increments and decrements", async () => {
  const user = userEvent.setup();
  render(<Counter />);

  const decrement = screen.getByRole("button", {
    name: /decrement/i,
  });
  const increment = screen.getByRole("button", {
    name: /increment/i,
  });
  const count = screen.getByText("Count: 0");

  expect(count.textContent).toBe("Count: 0");
  await user.click(increment);
  expect(count.textContent).toBe("Count: 1");
  await user.click(decrement);
  expect(count.textContent).toBe("Count: 0");
});
