import styled from 'styled-components';
import { Text, Background } from '../../globalVar';

export const BackgroundFeature = styled(Background)`
  align-items: start;
  padding-left: 50px;
  border-bottom: 0;
  @media (max-width: 1100px) {
    display: ${({ dontShowInSmallView }) => dontShowInSmallView && 'none'};
  }
`;

export const FeatureText = styled(Text)`
  max-width: 700px;
`;

export const Title = styled.h2`
  color: white;
  font-size: 50px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
  margin: 0;
  margin-bottom: 0.8rem;
`;

export const PlayButton = styled.button`
  border: 0;
  background-color: #e6e6e6;
  color: black;
  padding: 0.5rem 1.3rem;
  font-size: 1.5rem;
  width: 150px;
  border-radius: 0.2rem;
  cursor: pointer;
  margin-top: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  transition: background-color 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:hover {
    background-color: #ff1e1e;
    color: white;

    &:after {
      border-color: transparent transparent transparent white;
    }
  }
  &:after {
    content: '';
    border-style: solid;
    border-width: 10px 10px 10px 15px;
    border-color: transparent transparent transparent black;
    transform: translateY(2px);
  }
`;
