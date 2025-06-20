import InputText from './input-text';

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

export const InputComponent = {
  [InputType.InputText]: {
    Component: InputText,
  },
};
