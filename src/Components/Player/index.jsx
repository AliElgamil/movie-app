import React from 'react';
import { useState } from 'react';
import reactDom from 'react-dom';
import { Container, Button, Overlay, Inner, Close } from './Style';

export default function Player({ src }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <Container>
      {showPlayer
        ? reactDom.createPortal(
            <Overlay onClick={() => setShowPlayer(false)}>
              <Inner>
                <video
                  id="netflix-player"
                  controls
                  onClick={(e) => e.stopPropagation()}
                >
                  <source src={src} typeof="video/mp4" />
                </video>
                <Close />
              </Inner>
            </Overlay>,
            document.body
          )
        : null}
      <Button onClick={() => setShowPlayer(true)}>Play</Button>
    </Container>
  );
}
