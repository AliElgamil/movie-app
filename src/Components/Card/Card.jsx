import React from 'react';
import { useState } from 'react';
import Player from '../Player/index';
import {
  Entities,
  Group,
  Title,
  Item,
  Image,
  SubTitle,
  Text,
  FeatureBg,
  Content,
  FeatureTitle,
  FeatureText,
  Maturity,
  FeatureClose,
  Container,
  Meta,
} from './Style/Style.js';

export default function Cards({ slide, category }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  const filter = (data) => {
    let filtered = [];

    data.forEach((slide) => {
      if (!filtered.filter((item) => item.title === slide.title).length)
        filtered = [...filtered, slide];
      else return;
    });

    return filtered;
  };

  const showFeatureFun = (item) => {
    setItemFeature(item);
    setShowFeature(true);
  };
  return (
    <Container>
      <Title>{slide.title}</Title>
      <Entities>
        {filter(slide.data).map((item) => (
          <Item key={item.id} onClick={() => showFeatureFun(item)}>
            <Image
              src={`./images/${category}/${item.genre}/${item.slug}/small.jpg`}
            />
            <Meta>
              <SubTitle>{item.title}</SubTitle>
              <Text>{item.description}</Text>
            </Meta>
          </Item>
        ))}
      </Entities>
      {showFeature ? (
        <FeatureBg
          src={`../images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
        >
          <Content>
            <FeatureTitle>{itemFeature.title}</FeatureTitle>
            <FeatureText>{itemFeature.description}</FeatureText>
            <FeatureClose onClick={() => setShowFeature(false)}>
              <img src={`./images/icons/close.png`} alt="close" />
            </FeatureClose>
            <Group margin="30px 0" flexDirection="row" alignItems="center">
              <Maturity rating={itemFeature.maturity}>
                {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
              </Maturity>
              <FeatureText fontWeight="bold">
                {itemFeature.genre?.charAt(0).toUpperCase() +
                  itemFeature.genre?.slice(1)}
              </FeatureText>
            </Group>
            <Player src={`./videos/bunny.mp4`} />
          </Content>
        </FeatureBg>
      ) : null}
    </Container>
  );
}
