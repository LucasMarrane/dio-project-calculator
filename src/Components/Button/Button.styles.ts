import styled from "styled-components";

export interface ButtonContainer{
    color?: string;
    borderLeft?: boolean;
    borderRight?: boolean;
}

export const ButtonContainer = styled.button<ButtonContainer>`
  padding: 20px;
  border: 1px solid #cdcdcd;
  background-color: ${(props) => (props.color ? props.color : "#6c757d")};
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  flex: 1;

  ${(props) =>
    props.borderLeft &&
    `   
        border-bottom-left-radius: 20px;
  `}

  ${(props) =>
    props.borderRight &&
    `   
        border-bottom-right-radius: 20px;
  `}


  &:hover {
    opacity: 0.6;
  }
`;
