import styled, { CSSProperties } from "styled-components";

export const LocationInputStyles: CSSProperties = {
  padding: "0.8rem 3rem",
  width: "30vw",
  fontSize: "1.1rem",
};
export const LimitInputStyles: CSSProperties = {
  padding: "0.8rem 3rem",
  width: "10vw",
  fontSize: "1.1rem",
};

export const SuggestionStyles: CSSProperties = {
  paddingTop: "5px",
  cursor: "pointer",
};

export const divStyles: CSSProperties = {
  marginLeft: "3rem",
  marginTop: "3rem",
  display: "flex",
  flexDirection: "row",
};

export const SuggestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  align-items: flex-start;
  margin-top: 1rem;
  max-width: 30vw;
  overflow-x: scroll;

  
`;
