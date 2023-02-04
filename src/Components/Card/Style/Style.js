import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 24px;
  color: #e5e5e5;
  margin: 0 56px;
  margin-bottom: 1rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  margin-top: 100px;

  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection === 'row' ? 'row' : 'column'};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};

  > ${Container}:first-child {
    @media (min-width: 1000px) {
      margin-top: -150px;
    }
  }
`;

export const SubTitle = styled.p`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 0;
  user-select: none;
  display: none;
`;

export const Text = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: #fff;
  margin-bottom: 0;
  user-select: none;
  display: none;
`;

export const FeatureText = styled.p`
  font-size: 18px;
  color: #fff;
  font-weight: ${({ fontWeight }) => fontWeight && fontWeight};
  margin: 0;
  @media (max-width: 600px) {
    line-height: 22px;
  }
`;

export const FeatureBg = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) => src}) no-repeat right / contain;
  position: relative;

  @media (max-width: 1000px) {
    ${Title} {
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 10px;
    }

    ${FeatureText} {
      font-size: 14px;
    }
  }

  @media (max-width: 600px) {
    background-size: cover;
  }
`;

export const FeatureTitle = styled(Title)`
  margin-left: 0;
`;

export const FeatureClose = styled.button`
  color: white;
  background: transparent;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`;

export const Maturity = styled.div`
  background-color: ${({ rating }) => (rating >= 15 ? 'red' : 'green')};
  border-radius: 50%;
  width: 22px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 20%);
  margin-right: 10px;
  font-size: 12px;
`;

export const Content = styled.div`
  margin: 56px;
  max-width: 500px;

  @media (max-width: 1000px) {
    margin: 30px;
    max-width: none;
  } ;
`;

export const Meta = styled.div`
  display: none;
  padding: 10px;
  position: absolute;
  bottom: 0;
  background-color: #0000008f;
`;

export const Entities = styled.div`
  display: flex;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    transform: scale(1.3);
    z-index: 999;
  }

  @media (min-width: 1200px) {
    &:hover ${Meta}, &:hover ${Text},&:hover ${SubTitle} {
      display: block;
      z-index: 100;
    }

    &:first-of-type {
      margin-left: 56px;

      @media (max-width: 1000px) {
        margin-left: 30px;
      }
    }

    &:last-of-type {
      margin-right: 56px;

      @media (max-width: 1000px) {
        margin-left: 30px;
      }
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 305px;
  cursor: pointer;
`;
