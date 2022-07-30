/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
`;

const Header: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Header;
