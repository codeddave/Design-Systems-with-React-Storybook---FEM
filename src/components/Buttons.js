import styled from "styled-components";
import { defalutTheme } from "../utils";

const Button = styled.button`
  border-radius: 2px;
  padding: 12px 24px;
  font-size: 1rem;
  min-width: 100px;
  margin-left: 2rem;
  cursor: pointer;
  font-family: "Roboto Mono", monospace;
  transition: background-color 0.2s linear, color 0.2s linear;
  &:hover {
    background-color: ${defalutTheme.primaryColorHover};
    color: ${defalutTheme.textColorOnPrimary};
  }
  &:focus {
    outline: 2px solid ${defalutTheme.primaryColorHover};
    outline-offset: 3px;
  }
  &:active {
    background-color: ${defalutTheme.primaryColorActive};
    border-color: ${defalutTheme.primaryColorActive};
    color: ${defalutTheme.textColorOnPrimary};
  }
`;

const PrimaryButton = styled(Button)`
  background-color: ${defalutTheme.primaryColor};
  border: none;
  color: white;
  &:disabled {
    background-color: ${defalutTheme.disabled};
    cursor: not-allowed;
    color: ${defalutTheme.textOnDisabled};
  }
`;
export const SecondaryButton = styled(Button)`
  background: none;
  border: 1px solid ${defalutTheme.primaryColor};
  color: ${defalutTheme.primaryColor};
  &:hover {
    background-color: ${defalutTheme.primaryColor};
    color: white;
  }
  &:disabled {
    background: none;
    cursor: not-allowed;
    color: ${defalutTheme.disabled};
  }
`;
export const TertiaryButton = styled(Button)`
  background: none;
  border: none;
  color: ${defalutTheme.primaryColor};
  &:disabled {
    background: none;
    cursor: not-allowed;
    color: ${defalutTheme.disabled};
  }
`;

export default PrimaryButton;
