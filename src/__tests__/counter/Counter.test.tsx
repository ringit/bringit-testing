import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import Counter from "@/pages/counter/Counter";
import { expect, test, beforeEach } from "vitest";

// NOTE: this is a new requirement in React 18
// https://react.dev/blog/2022/03/08/react-18-upgrade-guide#configuring-your-testing-environment
// @ts-expect-error Im just too lazy to type the globalThis to suite React 18 needs
global.IS_REACT_ACT_ENVIRONMENT = true;

// create a div to render your component to (document.createElement)
//
// append the div to document.body (document.body.append)
//
// use createRoot to render the <Counter /> to the div
// get a reference to the increment and decrement buttons:
//   div.querySelectorAll('button')
//  get a reference to the message div:
//    div.firstChild.querySelector('div')
//
// expect the message.textContent toBe 'Current count: 0'
// click the increment button (act(() => increment.click()))
// assert the message.textContent
// click the decrement button (act(() => decrement.click()))
// assert the message.textContent
//
// cleanup by removing the div from the page (div.remove())
// If you don't cleanup, then it could impact other tests and/or cause a memory leak

beforeEach(() => {
  document.body.innerHTML = "";
});

test("counter increments and decrements", () => {
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

test("counter increments and decrements", () => {
  const div = document.createElement("div");
  document.body.append(div);

  const root = createRoot(div);
  act(() => root.render(<Counter />));
  console.log(document.body.innerHTML);

  const [decrement, increment] = document.body.querySelectorAll("button");
  const count = (div.firstChild as HTMLElement).querySelector("p")!;

  expect(count.textContent).toBe("Count: 0");
  act(() => increment.click());
  expect(count.textContent).toBe("Count: 1");
  act(() => decrement.click());
  expect(count.textContent).toBe("Count: 0");
});
