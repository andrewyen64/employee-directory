import React from 'react';
import Container from './components/Container'
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
          <Header/>
          <Container/>
      </Wrapper>
    </div>
  );
}

export default App;
