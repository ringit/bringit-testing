import Login from "@/pages/login/Login";
import { screen } from "@testing-library/react";
import { afterAll, beforeAll, expect, test } from "vitest";
import { renderWithSetup } from "../test-helpers";
import { setupServer } from "msw/node";
import { handlers } from "@/mock/server-handlers";
import { faker } from "@faker-js/faker";

// Here we will test Login flow so we could call it integration test
// We will introduce api call mocks with mock service worker (msw) https://mswjs.io/
//
// Firstly we need to setup our server, that we also use in our development environment
// In mock/server-handlers.ts we have described our endpoint that we want to mock and how to mock them
// In mock/server.ts we setup server for development environment and import it in our app entry main.tsx
//
// To setup server for this test suite we would want to use same handlers as for in the dev setup this is already done with ( setupServer(...handlers) )
// before running test suite we would need to start the server using server.listen ( beforeAll )
// after each test we would need to reset handlers to cleanup the mock between tests server.resetHandlers ( afterEach )
// after the test suite we would need to close the mock server to have it clean up and be ready for new tests server.close ( afterAll )
//
// render <Login> with renderWithSetup
// type into email field using faker-js ( user.type )
// type into password field using faker-js ( user.type )
// click submit button ( user.click )
// Assert that new text has appeared with message: Welcome {email} ( screen.findByText )
//
// Looking at the mocked /login handler we can see if email or password is not sent, server will respond with 400 { message: "Wrong username or password" }
// Create a test to check the unhappy flow, using the same principles and assert that div with role alert is displayed with text: "Wrong username or password"
//
// Having multiple test where data with same structure is needed it would be nice to create a helper function that provides these values.
// For this example a good naming would be buildLoginForm which return email and password.
//
// After these test we could remove LoginForm.test.tsx completely since it does not hold any value anymore. Tests here are considered integration tests and they cover the logic in LoginForm

const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

test("user can login", async () => {});

test("user can not login", async () => {});
