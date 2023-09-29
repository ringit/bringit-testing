import { expect, test, vi } from "vitest";
import { renderWithSetup } from "../test-helpers";
import LoginForm from "@/modules/login/LoginForm";
import { screen } from "@testing-library/react";
import { faker } from "@faker-js/faker";

// Here we will test the "unit" of LoginForm using mock functions
//
// create mock handleSubmit function ( vi.fn )
// render <LoginForm> with mocked handleSubmit use renderWithSetup helper function
// type into email field email ( user.type )
// type into password field password ( user.type )
// click the submit button ( user.click )
// expect mocked functions to have been called with correct email and password ( mockedFn.mock.calls[0][0] )
//
// Looking this test it would seem that email and password need to be the exact provided string.
// Let's use faker-js to use fake data for the test. This would insist that the email and password field could be whatever the user enters.
//
// Change the test so that email and password are always different string using faker-js ( faker.internet.email(), faker.internet.password() )

test("Submitting form calls onSubmit with email and password", async () => {
  const handleSubmit = vi.fn();
  const { user } = renderWithSetup(<LoginForm onSubmit={handleSubmit} />);
  const email = faker.internet.email();
  const password = faker.internet.password();

  const submit = screen.getByRole("button", {
    name: /submit/i,
  });

  await user.type(
    screen.getByRole("textbox", {
      name: /email/i,
    }),
    email
  );
  await user.type(screen.getByLabelText(/password/i), password);

  await user.click(submit);

  expect(handleSubmit.mock.calls[0][0]).toStrictEqual({
    email,
    password,
  });
});
