import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.form`
  display: grid;
  grid-template-rows: repeat(5, 4rem);

  gap: 1rem;

  button[type="submit"] {
    border: none;
    border-radius: 0.3rem;
    background: var(--green);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--shape);
  }
`;

export const Input = styled.input`
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

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  button {
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background: transparent;

    display: flex;
    align-items: center;
    justify-content: center;
  
    img {
      height: 20px;
      width: 20px;
    }

    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: var(--text-title);
    }

    transition: border-color 0.2s;

    &:hover {
      border-color: ${darken(0.1, '#d7d7d7')};
    }
  }
`;
