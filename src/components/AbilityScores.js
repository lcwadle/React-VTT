import React from 'react';
import AbilityScore from './AbilityScore';
import './ability-scores.css';

class AbilityScores extends React.Component {
  state = {
    strength: {
      name: 'Strength',
      bonus: -1,
      score: 8
    },
    dexterity: {
      name: 'Dexterity',
      bonus: 2,
      score: 14
    },
    constitution: {
      name: 'Constitution',
      bonus: 3,
      score: 16
    },
    intelligence: {
      name: 'Intelligence',
      bonus: 1,
      score: 12
    },
    wisdom: {
      name: 'Wisdom',
      bonus: 1,
      score: 13
    },
    charisma: {
      name: 'Charisma',
      bonus: 4,
      score: 19
    }
  }

  render() {
    return (
      <div className='ability-scores'>
      <AbilityScore stat={ this.state.strength } />
      <AbilityScore stat={ this.state.dexterity } />
      <AbilityScore stat={ this.state.constitution } />
      <AbilityScore stat={ this.state.intelligence } />
      <AbilityScore stat={ this.state.wisdom } />
      <AbilityScore stat={ this.state.charisma } />
      </div>
    );
  }
}

export default AbilityScores;
