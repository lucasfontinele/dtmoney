import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --shape: #fff;

    --red: #e52e4d;
    --blue: #5429CC;
    --blue-light: #6933ff;
    --green: #33CC95;

    --text-title: #363f5f;
    --text-body: #969cb3;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  // Utilizar a medida de porcentagem ajuda em casos de acessibilidade, já que prevê o comportamento para usuários que aumentam o tamanho da fonte
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, text-area, button {
    font-family: Poppins, sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    padding: 4rem 3rem;

    background: var(--background);

    position: relative;
    border-radius: 0.25rem;

    h2 {
      color: var(--text-title);
      font-weight: 600;
      font-size: 1.5rem;

      margin-bottom: 2rem;
    }

    .react-modal-close {
      position: absolute;
      top: 0;
      right: 0;
      border: none;

      width: 2.5rem;
      height: 2.5rem;
      margin-top: 0.5rem;
      margin-right: 0.5rem;

      transition: filter 0.2s;

      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;
