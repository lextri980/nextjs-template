"use client";
import { Button, FormInput } from "@/components";
import { useAppDispatch } from "@/hooks";
import { AuthActions } from "@/store/authStore/auth.reducer";
import { yupResolver } from "@hookform/resolvers/yup";
import { DefaultValues, SubmitHandler, useForm } from "react-hook-form";
import { schema } from "./schema";
import { LoginContainer } from "./style";
import { ILogin } from "./type";

export default function Login() {
  const dispatch = useAppDispatch();
  const defaultValues: DefaultValues<ILogin> = {
    email: "",
    password: "",
    remember: false,
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  /**
   * Handle login
   * @param {Object} value - Value of login form
   */
  const login: SubmitHandler<ILogin> = () => {
    dispatch(AuthActions.loginRequest());
    reset();
  };

  return (
    <LoginContainer>
      <p className="text-3xl text-center mb-4">Login</p>
      <div className="form-group flex flex-col gap-4 justify-center items-center">
        <FormInput
          control={control}
          name="email"
          label="Email"
          placeholder="Email"
          isInvalid={errors.email?.message ? true : false}
          labelPlacement="outside"
        />
        <small className="text-red-500 align-self-start w-full">
          {errors && errors.email?.message}
        </small>
        <FormInput
          control={control}
          type="password"
          isVisible={false}
          name="password"
          label="Password"
          placeholder="Password"
          labelPlacement="outside"
          isInvalid={errors.password?.message ? true : false}
        />
        <small className="text-red-500 align-self-start w-full">
          {errors && errors.password?.message}
        </small>
        <div className="remember-me">
          <FormInput control={control} type="checkbox" name="remember" />
          <span>Remember me</span>
        </div>
        <Button onClick={handleSubmit(login)}>Login</Button>
      </div>
    </LoginContainer>
  );
}
