import styled from 'styled-components';

export const Container = styled.div``;

export const Button = styled.button`
  border-color: #ff0a10;
  background-color: #e50914;
  color: white;
  font-size: 1.5rem;
  width: 114px;
  height: 45px;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 0.2rem;
  cursor: pointer;
  margin-top: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:hover {
    background-color: #ff0a16;
    transform: scale(1.05);

    &:after {
      border-color: transparent transparent transparent white;
    }
  }
  &:after {
    content: '';
    border-style: solid;
    border-width: 10px 0px 10px 15px;
    border-color: transparent transparent transparent white;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0 0 0 / 45%);
`;

export const Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  /* padding: 0 30px; */
  video {
    width: 100%;
  }
`;

export const Close = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 22px;
  height: 22px;
  opacity: 0.9;
  background-color: transparent;
  border: none;
  cursor: pointer;
  border: 1px solid #000;
  border-radius: 50%;
  padding: 3px;

  &:hover {
    opacity: 1;
  }

  &::before,
  &::after {
    position: absolute;
    left: 10px;
    top: 1px;
    content: '';
    height: 20px;
    width: 2px;
    background-color: #000;
  }

  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;
