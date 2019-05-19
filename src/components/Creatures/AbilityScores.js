import React from 'react';
import AbilityScore from './AbilityScore';
import './ability-scores.css';

class AbilityScores extends React.Component {
  render() {
    return (
      <div className='ability-scores'>
      {this.props.abilityScores.map((abilityScore) => (
        <AbilityScore stat={abilityScore} />
      ))}
      </div>
    );
  }
}

export default AbilityScores;
