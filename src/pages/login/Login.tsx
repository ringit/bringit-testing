import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { LoginRequest } from "@/api/request/LoginRequest";
import BackendClient from "@/api/BackendClient";
import { LoginResponse } from "@/api/response/LoginResponse";
import LoginForm, { LoginFormValues } from "@/modules/login/LoginForm";
import { AxiosError } from "axios";
import { LoginError } from "@/api/response/LoginError";

const Login = () => {
  const [userData, setUserData] = useState<LoginResponse | undefined>();
  const [error, setError] = useState<string | undefined>();

  const loginMutation = useMutation(
    (request: LoginRequest) => BackendClient.login(request),
    {
      onSuccess: (data) => {
        setError(undefined);
        setUserData(data.data);
      },
      onError: (data: AxiosError<LoginError>) =>
        setError(data.response?.data.message),
    }
  );

  const handleLoginSubmit = (values: LoginFormValues) => {
    loginMutation.mutate(values);
  };

  return (
    <div className="flex justify-center">
      {userData ? (
        <p>Welcome {userData.name}</p>
      ) : (
        <div className="flex flex-col">
          <LoginForm onSubmit={handleLoginSubmit} />
          {error ? (
            <div role="alert" className="text-red-500">
              {error}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Login;
