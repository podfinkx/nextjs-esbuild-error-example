import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html{
    box-sizing: border-box;
    font-family: Inter, Roboto, Arial, Helvetica, sans-serif;
    display:block;
    height: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 0;
  }

  body[data-theme="light"] {
      --color-body: #E1E4E8;
      --color-body-alt: #BBBFC3;
      --color-text: #24292e;
      --color-text-alt: #3B3E41;
      --color-btn: #FF9696;
      --color-btn-alt: #7A4747;
      --color-highlight: #B36969;
  }

  body[data-theme="dark"] {
      --color-body: #24292E;
      --color-body-alt: #121517;
      --color-text: #E1E4E8;
      --color-text-alt: #BBBFC3;
      --color-btn: #9D3434;
      --color-btn-alt: #F9826C;
      --color-highlight: #F9826C;
  }

  body {
    background: var(--color-body);
    color: var(--color-text);
    transition: all 0.50s linear;
    font-size: 18px;
    padding: 30px 0 30px 0;
    margin: 0 auto;

    @media (max-width: 846px) {
        padding: 30px 18px 18px 18px;
    }
  }

  .title1 {
    font-size: 33px;
  }
  .title2 {
    font-size: 24px;
  }

  .link {
    text-decoration: none;
    color: var(--color-highlight);
  }
  .link:hover {
    text-decoration: underline;
  }

  .container {
    height: 100%;
    width: 100%;
    .content {
     margin-top: 30px;
    }
  }
`;
