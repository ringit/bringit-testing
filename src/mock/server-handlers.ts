import { LoginRequest } from "@/api/request/LoginRequest";
import { LoginResponse } from "@/api/response/LoginResponse";
import { rest } from "msw";

const delay = process.env.NODE_ENV === "test" ? 0 : 1000;

export const handlers = [
  rest.post<LoginRequest, LoginResponse>(
    "http://localhost/login",
    async (req, res, ctx) => {
      const { email, password } = await req.json();

      if (!email || !password) {
        return res(
          ctx.delay(delay),
          ctx.status(400),
          ctx.json({ message: "Wrong username or password" })
        );
      }

      return res(ctx.delay(delay), ctx.json({ name: email }));
    }
  ),
];
