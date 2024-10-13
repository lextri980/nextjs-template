import { ButtonContainer } from "./style";
import { IButton } from "./type";

export default function Button(props: IButton) {
  return (
    <ButtonContainer onClick={props.onClick} color={props.color}>
      {props.children}
    </ButtonContainer>
  );
}
