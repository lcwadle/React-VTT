import React from 'react';
import CharacterInfo from './CharacterInfo';
import AbilityScores from './AbilityScores';
import Inspiration from './Inspiration';
import Proficiency from './Proficiency';
import Saves from './Saves';
import Skills from './Skills';
import './character-sheet.css';

class CharacterSheet extends React.Component {
  render() {
    return (
      <div className='character-sheet ui segment'>
        <CharacterInfo />

        <div className='left ui segment'>
          <div className='primary-stats'>
            <AbilityScores />
          </div>
          <div className='secondary-stats'>
            <Proficiency />
            <Saves />
            <Skills />
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterSheet;
