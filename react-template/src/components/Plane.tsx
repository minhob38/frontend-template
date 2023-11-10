/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { io } from "socket.io-client";
import kfx from "../assets/images/kfx.jpeg";

/*
emotion
https://emotion.sh/docs/introduction
*/
const CSS = css`
  font: normal normal 16px / 30px Noto Sans CJK KR;
`;
const Img = styled.img``;

const SOCKET_SERVER_ADDRESS = "http://localhost:8000";
const SOCKET_SERVER_NAMESPACE = "dashboard/event";
const socket = io(`${SOCKET_SERVER_ADDRESS}/${SOCKET_SERVER_NAMESPACE}`, {
  transports: ["websocket"],
});
socket.connect();
const PUBLISH_EVENT = "subscribeChatEvent";
const SUBSCRIBE_EVENT = "dashboardChatDeleteEvent";

const MESSAGE = { userId: "63", roomType: "dashboard" };
const Plane: React.FC = () => {
  useEffect(() => {
    socket.on(SUBSCRIBE_EVENT, (data) => {
      console.log(`subscribe: ${SUBSCRIBE_EVENT}`);
      console.log(data);
    });
  }, []);

  const handleClick = () => {
    console.log(`publish: ${PUBLISH_EVENT}`);
    socket.emit(PUBLISH_EVENT, MESSAGE, (response) => console.log(response));
  };

  return (
    <>
      <div css={CSS}>Plane 🛩</div>
      <Img src={kfx} alt="kfx" width={150} />
      <button onClick={handleClick}>Publish</button>
    </>
  );
};

export default Plane;
