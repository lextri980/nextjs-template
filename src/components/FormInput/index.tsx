import {
  Controller,
  ControllerRenderProps,
  FieldValues,
} from "react-hook-form";
import { InputComponent, InputType } from "./helper";
import { IFormInput } from "./type";

export default function FormInput(props: IFormInput) {
  const {
    type = InputType.InputText,
    control,
    name,
    defaultValue = "",
    ...inputProps
  } = props;

  /**
   *
   * @param {any} params - All properties of Input comonent
   * @returns React.JSX.Element
   */
  const renderComponent = (
    params: ControllerRenderProps<FieldValues, string>
  ) => {
    const Input = InputComponent[type];
    const { ...rest } = params;

    return <Input.Component {...rest} {...inputProps} />;
  };

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => renderComponent(field)}
    />
  );
}
