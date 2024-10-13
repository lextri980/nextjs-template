import InputCheckbox from "./InputCheckbox";
import InputPassword from "./InputPassword";
import InputText from "./InputText";

export const InputType = {
  InputText: "text",
  InputPassword: "password",
  InputNumber: "number",
  InputRadio: "radio",
  InputCheckbox: "checkbox",
  InputSwitch: "switch",
  InputSelect: "select",
  InputTextArea: "textarea",
  InputDate: "date",
};

export const InputComponent = {
  [InputType.InputText]: {
    Component: InputText,
  },
  [InputType.InputCheckbox]: {
    Component: InputCheckbox,
  },
  [InputType.InputPassword]: {
    Component: InputPassword,
  },
};
