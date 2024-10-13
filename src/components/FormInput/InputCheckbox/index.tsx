import { Checkbox } from "@nextui-org/react";
import React from "react";

const InputCheckbox = React.forwardRef<HTMLInputElement>((props, ref) => {
  return <Checkbox {...props} ref={ref} />;
});

InputCheckbox.displayName = "InputCheckbox";
export default InputCheckbox;
