import type { AppProps } from "next/app";
import styled from "@emotion/styled";
import { wrapper } from "../store";
import "../assets/styles/globals.css";

const MobileWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div>공통 app</div>
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
