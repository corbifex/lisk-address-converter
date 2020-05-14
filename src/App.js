import React, { useState } from 'react';
import './App.css';
import { Converter } from "./Converter";

function App() {

  const [publicKey, setPublicKey] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://lisk.io/themes/custom/lisk_theme/logo.svg" className="App-logo" alt="logo" />
        <input onChange={(event) => setPublicKey(event.target.value)} value={publicKey} className="publicKey" placeholder="Past here your Public key" autoComplete={false} />
        <Converter publicKey={publicKey} />
        <div className="Links">
          <a href="https://explorer.lisk.io">Explorer</a>
          <a href="https://github.com/LiskHQ/lips/blob/master/proposals/lip-0018.md">Lip 18</a>
        </div>
      </header>
    </div>
  );
}

export default App;
