import React from 'react';
import { useState } from 'react';
import { EmailContext } from './Context/context';

import { RoutesComponent } from './Helpers/Routes';

export default function App() {
  const [email, setEmail] = useState('');
  return (
    <div className="App">
      <EmailContext.Provider value={{ email, setEmail }}>
        <RoutesComponent />
      </EmailContext.Provider>
    </div>
  );
}
