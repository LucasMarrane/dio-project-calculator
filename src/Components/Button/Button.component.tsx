
import { ButtonContainer } from './Button.styles';

interface ButtonProps extends ButtonContainer{
    label?: string;
    onClick?: Function;
    
}
export default function Button({label, onClick, ...props}:ButtonProps){
    return (
      <ButtonContainer onClick={onClick as any} type="button" {...props}>
       {label}
      </ButtonContainer>
    );
  }
  