import styled, { createGlobalStyle } from 'styled-components';

export const LockBody = createGlobalStyle`
body {
    overflow: hidden
}
`;

export const ReleaseBody = createGlobalStyle`
body {
    overflow: visible
}
`;

export const Spinner = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 9999;

  &:after {
    content: '';
    position: absolute;
    top: calc(50% - 75px);
    left: calc(50% - 75px);
    background: url(./images/misc/spinner.png) no-repeat;
    background-size: contain;
    width: 150px;
    height: 150px;
    animation: spin 1s infinite linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Picture = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
