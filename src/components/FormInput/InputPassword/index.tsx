import { Input, InputProps } from "@nextui-org/react";
import React from "react";

interface InputPasswordProps extends InputProps {
  isVisible?: boolean;
}

const InputPassword = React.forwardRef<HTMLInputElement, InputPasswordProps>(
  (props, ref) => {
    const { isVisible, ...rest } = props;
    return (
      <Input type={isVisible ? "text" : "password"} {...rest} baseRef={ref} />
    );
  }
);

InputPassword.displayName = "InputPassword";
export default InputPassword;
