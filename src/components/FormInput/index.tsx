import {
  Controller,
  ControllerRenderProps,
  FieldValues,
  Path,
  PathValue,
} from "react-hook-form";
import { InputComponent, InputType } from "./helper";
import { IFormInput } from "./type";

export default function FormInput<T extends FieldValues = FieldValues>(
  props: IFormInput<T>
) {
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
  const renderComponent = (params: ControllerRenderProps<T, Path<T>>) => {
    const Input = InputComponent[type];
    const { ...rest } = params;

    return <Input.Component {...rest} {...inputProps} />;
  };

  return (
    <Controller<T>
      control={control}
      name={name as Path<T>}
      defaultValue={defaultValue as PathValue<T, Path<T>>}
      render={({ field }) => renderComponent(field)}
    />
  );
}
