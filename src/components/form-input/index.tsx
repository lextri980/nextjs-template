import {
  Controller,
  type ControllerRenderProps,
  type FieldValues,
} from 'react-hook-form';
import { InputComponent, InputType } from './constant';
import { TFormInput } from './type';

/**
 * All form input defined by type
 * - Textfield
 * - Textarea
 * - Number input
 * - Radio button
 * - Checkbox
 * - Select
 * - Date picker
 * @param props Component props
 * @returns Component
 */
export default function FormInput<T>(props: TFormInput<T>) {
  // [Props] Destructuring props
  const {
    type = InputType.InputText,
    control,
    name,
    defaultValue = '',
    ...inputProps
  } = props;

  /**
   * [Render] Input component based on type passed down
   * @param params Data field of Controller component in React-hook-form
   * @returns Input component
   */
  const renderComponent = (
    params: ControllerRenderProps<FieldValues, string>
  ) => {
    const Input = InputComponent[type];
    const { ...rest } = params;

    return <Input.Component {...rest} {...inputProps} />;
  };

  //! [JSX Section] -----------------------------------------------------------------
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => renderComponent(field)}
    />
  );
}
