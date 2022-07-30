/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const Wrapper = styled.div`
  position: fixed;
  top: 50;
  right: 0;
  bottom: 30;
  left: 0;
  overflow: hidden;
`;

const Content: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Content;
