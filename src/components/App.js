import React from 'react';
import Story from './Story';
import CharacterSheet from './CharacterSheet';
import './dm-screen.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <CharacterSheet />
      </div>
    );
  }
}

export default App;
