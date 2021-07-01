import styled from "styled-components";

const Wrappers = styled.div`
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;
  background: #83a4d4;
  background: -webkit-linear-gradient(to right, #b6fbff, #83a4d4);
  background: linear-gradient(to right, #b6fbff7f, #83a3d48b);
  margin-bottom: 0.5rem;
`;

const BoxWrapper = ({ children }) => <Wrappers>{children}</Wrappers>;

export default BoxWrapper;
