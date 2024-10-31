import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50px, -50px);
  z-index: 100;
`;

export const DOT = styled.div`
  offset-path: path(
    "M16.7,66.7C7.5,66.7,0,74.1,0,83.3S7.5,100,16.7,100s16.7-7.5,16.7-16.7c0,0,0-50,0-50C33.3,14.9,48.3,0,66.7,0S100,14.9,100,33.3c0,18.4-14.9,33.3-33.3,33.3C66.7,66.7,16.7,66.7,16.7,66.7z"
  );
  animation: sweep 4s infinite linear;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 32px;
  margin-top: -16px;
  margin-left: -16px;
  tranform-origin: 0, 0;

  &:nth-child(1) {
    animation-delay: 0s;
    background-color: #1994f4;
  }

  &:nth-child(2) {
    animation-delay: -0.9s;
    background-color: #01c381;
  }

  &:nth-child(3) {
    animation-delay: -1.8s;
    background-color: #fe485b;
  }

  @keyframes sweep {
    0% {
      offset-distance: 0;
      transform: scale(0.5);
    }

    25% {
      transform: scale(0.3);
    }

    50%,
    75% {
      transform: scale(1);
    }

    100% {
      offset-distance: 100%;
      transform: scale(0.5);
    }
  }
`;
