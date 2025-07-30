import { type FieldValues, type Control } from 'react-hook-form';

/**
 * [Type] FormInput component props
 */
export type TFormInput<T> = T & {
  // Type of input (Default: InputType.InputText ~ text)
  type?: string;
  // Methods for registering components into React Hook Form
  control: Control<FieldValues, T>;
  // Name of Form input defining field of it
  name: string;
  // Field default value
  defaultValue?: string;
  // T => Rest type of props passed down
};
