import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

  ul {
      margin: 0px;
      padding: 0px;
    }
    
    li {
        margin: 0px;
        padding: 0px;
        list-style: none;
  }

h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
}

  img {
    display: block;
    max-width: 100%
  }
`;
