import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  font-family: "Open Sans", sans-serif;
}
body {
    text-align: center;
    margin: 0;
    padding: 0;
    background: #ada996;
    background: -webkit-linear-gradient(
    to right,
    #eaeaea,
    #dbdbdb,
    #f2f2f2,
    #ada996
  );
    background: linear-gradient(to right, #eaeaea, #dbdbdb, #f2f2f2, #ada996);
  }
`;

export default GlobalStyle;
