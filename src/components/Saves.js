import React from 'react';
import Save from './Save';
import './saves.css';

class Saves extends React.Component {
  render() {
    return (
      <div className='saves ui segment'>
        <ul>
          <li className='save-header'>
            <div className='inline prof'>PROF</div>
            <div className='inline save'>SAVE</div>
            <div className='inline bonus'>BONUS</div>
          </li>
          {this.props.abilityScores.map((abilityScore) => (
            <Save
              stat={abilityScore}
              prof={this.props.prof}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Saves;
