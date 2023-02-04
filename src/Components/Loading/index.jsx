import React from 'react';
import { LockBody, Picture, Spinner } from './Style';

export default function Loading({ src }) {
  return (
    <Spinner>
      <LockBody />
      <Picture src={src} />
    </Spinner>
  );
}
