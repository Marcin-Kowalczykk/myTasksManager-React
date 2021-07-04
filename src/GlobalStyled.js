import { createGlobalStyle, keyframes } from 'styled-components';

const BodyAnimation = keyframes`
  0% { background: linear-gradient(to right, #eaeaeabe, #dbdbdbbc, #f2f2f2ba, #ada996c0); }
  25% { background: linear-gradient(to right, #eaeaea8d, #dbdbdb89, #f2f2f284, #ada9967b); }
  50% { background: linear-gradient(to right, #eaeaea57, #dbdbdb55, #f2f2f258, #ada99657); }
  75% { background: linear-gradient(to right, #eaeaea26, #dbdbdb37, #f2f2f23b, #ada99644); }
  100% { background: linear-gradient(to right, #eaeaea, #dbdbdb, #f2f2f2, #ada996); }
`;

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
  animation: ${BodyAnimation} 24s linear infinite;
  }
`;

export default GlobalStyle;
