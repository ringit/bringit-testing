import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export const testQueryClient = new QueryClient({
  logger: {
    log: console.log,
    warn: console.warn,
    error: process.env.NODE_ENV === "test" ? () => {} : console.error,
  },
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export const renderWithSetup = (component: ReactNode) => {
  return {
    user: userEvent.setup(),
    ...render(
      <QueryClientProvider client={testQueryClient}>
        {component}
      </QueryClientProvider>
    ),
  };
};
