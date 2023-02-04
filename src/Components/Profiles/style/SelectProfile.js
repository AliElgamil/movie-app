import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
  margin-top: 60px;
`;

export const Title = styled.h1`
  width: 100%;
  color: #fff;
  font-size: 48px;
  text-align: center;
  font-weight: 500;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  list-style: none;
`;

export const Name = styled.p`
  color: #808080;
  font-size: 16px;

  &:hover {
    font-weight: bold;
    color: #e5e5e5;
  }
`;

export const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border: 3px solid #000;
  cursor: pointer;
`;

export const Item = styled.li`
  max-height: 200px;
  max-width: 200px;
  text-align: center;
  margin-right: 30px;

  &:hover > ${Picture} {
    border: 3px solid white;
  }

  &:hover ${Name} {
    font-weight: bold;
    color: white;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  gap: 15px;
  margin-left: 15px;
  list-style: none;
  padding: 0;
`;

export const TextLink = styled.button`
  color: #fff;
  opacity: 0.8;
  font-size: 22px;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
  text-transform: capitalize;
  text-decoration: none;
  opacity: ${({ active }) => (active ? 1 : 0.8)};
  transition: 250ms linear;
  background: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    color: #fff;
    opacity: 1;
  }
`;

export const Pictuer = styled.button`
  width: 32px;
  height: 32px;
  background: url(${({ src }) => src});
  background-size: contain;
  display: block;
  cursor: pointer;
  border: 0;
`;

export const DropdownItem = styled.li`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  white-space: nowrap;

  button {
    font-size: 0.9rem;
  }
`;

export const Dropdown = styled.ul`
  background: black;
  list-style: none;
  padding: 0;
  position: absolute;
  top: 100%;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 1rem 0.5rem;
  padding-right: 1.5rem;
  gap: 15px;
  transform: translateY(10px);
  visibility: hidden;
  opacity: 0;
  transition: 250ms linear;

  ${DropdownItem}:first-child ${TextLink},${DropdownItem}:first-child ${Picture} {
    cursor: default;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;
`;

export const GroupDropdown = styled(Group)`
  &:hover ${Dropdown} {
    transform: translateY(0);
    visibility: visible;
    opacity: 1;
  }

  &::after {
    content: '';
    background-image: url('./images/icons/chevron-right.png');
    position: absolute;
    top: 50%;
    left: -25px;
    transform: translateY(-50%) rotate(90deg);
    width: 15px;
    height: 15px;
    background-size: contain;
    filter: brightness(0) invert(1);
    cursor: pointer;
    opacity: 0.8;
    transition: 250ms linear;
  }

  &:hover::after {
    opacity: 1;
  }
`;
