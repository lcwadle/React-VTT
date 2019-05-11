import React from 'react';
import CharacterName from './CharacterName';
import CharacterDetails from './CharacterDetails';
import './character-info.css';

class CharacterInfo extends React.Component {
  render() {
    return (
      <div className='character-info ui segment'>
        <CharacterName name='Elon Muskhollow'/>
        <CharacterDetails classes='Bard' levels='1' race='Half-Elf' alignment='Chaotic Good' background='Entertainer' experiencePoints='0'/>
      </div>
    );
  }
}

export default CharacterInfo;
