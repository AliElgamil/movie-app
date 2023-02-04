import React from 'react';
import Cards from '../Card/Card';
import Feature from '../Feature';
import reactDom from 'react-dom';
import {
  FeatureText,
  BackgroundFeature,
  Title,
  PlayButton,
} from './Style/style';
import { Group } from '../Card/Style/Style';
import { Close, Inner, Overlay } from '../Player/Style';
import { useState } from 'react';

export default function BroseContent({ slideRows, category }) {
  const [showPlayer, setShowPlayer] = useState(false);
  return (
    <>
      <BackgroundFeature srcImage="joker1" dontShowInSmallView={true}>
        <Feature>
          <Title>Watch Joker No</Title>
          <FeatureText>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </FeatureText>

          {showPlayer
            ? reactDom.createPortal(
                <Overlay onClick={() => setShowPlayer(false)}>
                  <Inner>
                    <video
                      id="netflix-player"
                      controls
                      onClick={(e) => e.stopPropagation()}
                    >
                      <source src={'./videos/bunny.mp4'} typeof="video/mp4" />
                    </video>
                    <Close />
                  </Inner>
                </Overlay>,
                document.body
              )
            : null}

          <PlayButton onClick={() => setShowPlayer(true)}>Play</PlayButton>
        </Feature>
      </BackgroundFeature>

      <Group>
        {slideRows.map((slide, index) => (
          <Cards
            slide={slide}
            key={`${category}-${slide.title.toLowerCase()}-${
              index + 1 * Math.random()
            }`}
            category={category}
          />
        ))}
      </Group>
    </>
  );
}
