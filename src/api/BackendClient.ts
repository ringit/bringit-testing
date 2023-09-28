import { AxiosResponse } from "axios";
import { LoginResponse } from "./response/LoginResponse";
import { LoginRequest } from "./request/LoginRequest";
import { axiosClient } from "@/lib/axios-client";

export default {
  login: (request: LoginRequest): Promise<AxiosResponse<LoginResponse>> => {
    return axiosClient.post("http://localhost/login", request);
  },
};
