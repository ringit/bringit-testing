import React from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useForm } from "react-hook-form";

export interface LoginFormValues {
  email: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: (values: LoginFormValues) => void;
}

const LoginForm = (props: LoginFormProps) => {
  const { register, handleSubmit } = useForm<LoginFormValues>();

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(props.onSubmit)}
    >
      <Input id="email" label="Email" type="email" {...register("email")} />
      <Input
        id="password"
        label="Password"
        type="password"
        {...register("password")}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default LoginForm;
