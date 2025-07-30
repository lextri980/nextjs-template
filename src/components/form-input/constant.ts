import InputText from './input-text';

// [Const] Input types
export const InputType = {
  InputText: 'text',
  InputPassword: 'password',
  InputNumber: 'number',
  InputRadio: 'radio',
  InputCheckbox: 'checkbox',
  InputSwitch: 'switch',
  InputSelect: 'select',
  InputTextArea: 'textarea',
  InputDate: 'date',
};

// [Const] Input components based on input type
export const InputComponent = {
  [InputType.InputText]: {
    Component: InputText,
  },
};
