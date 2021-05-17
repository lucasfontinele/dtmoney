import styled from "styled-components";

export const Container = styled.input`
background: #E7E9EE;
border: 1px solid #D7D7D7;
box-sizing: border-box;
border-radius: 5px;
padding: 1.25rem 1.5rem;

&::placeholder {
  font-size: 1rem;
  color: var(--text-body);
}
`;