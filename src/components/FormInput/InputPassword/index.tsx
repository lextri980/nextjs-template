import { Icon } from "@/components";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { InputProps } from "@nextui-org/react";
import React, { useState } from "react";
import { PasswordContainer } from "./style";

const InputPassword = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { ...rest } = props;

    const [isVisible, setIsVisible] = useState(false);

    /**
     * Toggle eyes icon in password
     * @returns void
     */
    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
      <PasswordContainer
        type={isVisible ? "text" : "password"}
        endContent={
          <button onClick={toggleVisibility}>
            {isVisible ? (
              <Icon icon={faEyeSlash}></Icon>
            ) : (
              <Icon icon={faEye}></Icon>
            )}
          </button>
        }
        {...rest}
        baseRef={ref}
      />
    );
  }
);

InputPassword.displayName = "InputPassword";
export default InputPassword;
