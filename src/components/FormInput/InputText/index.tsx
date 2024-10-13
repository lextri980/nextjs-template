import { Input, InputProps } from "@nextui-org/input";
import React from "react";

const InputText = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return <Input {...props} baseRef={ref} />;
  }
);

InputText.displayName = "InputText";
export default InputText;
