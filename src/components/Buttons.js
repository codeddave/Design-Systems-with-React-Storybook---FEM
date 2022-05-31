import styled from "styled-components";

const primaryColor = "#2CA6A4";
const Button = styled.button`
  border-radius: 2px;
  padding: 12px 24px;
  font-size: 1rem;
  min-width: 100px;
  cursor: pointer;
  font-family: "Roboto Mono", monospace;
`;

const PrimaryButton = styled(Button)`
  background-color: ${primaryColor};
  border: none;
  color: white;
`;
export const SecondaryButton = styled(Button)`
  background: none;
  border: 1px solid ${primaryColor};
  color: ${primaryColor};
  &:hover {
    background-color: ${primaryColor};
    color: white;
  }
`;
const TertiaryButton = styled(Button)`
  background-color: ${primaryColor};
  border: none;
  color: white;
`;

export default PrimaryButton;
