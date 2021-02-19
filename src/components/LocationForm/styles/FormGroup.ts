import styled from "styled-components";

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 2rem;
  border-radius: 10px;
  
  @media (min-width: 760px) {
	justify-content: space-evenly;
  }
`;
  