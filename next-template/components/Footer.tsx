/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 30px;
`;

const Footer: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Footer;
