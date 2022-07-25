import React from 'react';
import './App.css';
import Page from './components/Page';
import Header from './components/Header';
import Converter from './components/Converter';

function App() {
  return (
    <div className="App-container">
      <Page>
        <Header />
        <Converter />
      </Page>
    </div>
  );
}

export default App;
