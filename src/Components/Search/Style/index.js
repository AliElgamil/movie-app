import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  svg {
    color: #fff;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  background: transparent;
  border: 0;

  img {
    max-width: 100%;
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;

export const SearchInput = styled.input`
  background: #44444459;
  color: #fff;
  border: 1px solid #fff;
  transition: width 0.5s linear, opacity 0.5s linear;
  height: 30px;
  font-size: 14px;
  margin-left: ${({ active }) => (active === true ? '10px' : '0')};
  padding: ${({ active }) => (active ? '0 10px' : '0')};
  opacity: ${({ active }) => (active ? '1' : '0')};
  width: ${({ active }) => (active ? '200px' : '0')};
`;
