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

beforeEach(() => {
  document.body.innerHTML = "";
});

test("counter increments and decrements", async () => {
  const div = document.createElement("div");
  document.body.append(div);

  const root = createRoot(div);
  act(() => root.render(<Counter />));

  const [decrement, increment] = document.body.querySelectorAll("button");
  const count = (div.firstChild as HTMLElement).querySelector("p")!;

  expect(count.textContent).toBe("Count: 0");
  act(() => increment.click());
  expect(count.textContent).toBe("Count: 1");
  act(() => decrement.click());
  expect(count.textContent).toBe("Count: 0");
});
