import styled from "styled-components";
import { defalutTheme, typeScale } from "../utils";

const Button = styled.button`
  border-radius: 2px;
  padding: 12px 24px;
  font-size: 1rem;
  min-width: 100px;
  cursor: pointer;
  font-family: "Roboto Mono", monospace;
`;

const PrimaryButton = styled(Button)`
  background-color: ${defalutTheme.primaryColor};
  border: none;
  color: white;
`;
export const SecondaryButton = styled(Button)`
  background: none;
  border: 1px solid ${defalutTheme.primaryColor};
  color: ${defalutTheme.primaryColor};
  &:hover {
    background-color: ${defalutTheme.primaryColor};
    color: white;
  }
`;
export const TertiaryButton = styled(Button)`
  background: none;
  border: none;
  color: ${defalutTheme.primaryColor};
`;

export default PrimaryButton;
