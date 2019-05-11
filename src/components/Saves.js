import React from 'react';
import Save from './Save';
import './saves.css';

class Saves extends React.Component {
  state = {
    strength: {
      prof: true,
      name: 'Strength',
      bonus: 4
    },
    dexterity: {
      prof: false,
      name: 'Dexterity',
      bonus: 1
    },
    constitution: {
      prof: false,
      name: 'Constitution',
      bonus: 1
    },
    intelligence: {
      prof: false,
      name: 'Intelligence',
      bonus: -1
    },
    wisdom: {
      prof: true,
      name: 'Wisdom',
      bonus: 6
    },
    charisma: {
      prof: true,
      name: 'Charisma',
      bonus: 6
    }
  }

  render() {
    return (
      <div className='saves ui segment'>
        <ul>
          <li className='save-header'>
            <div className='inline prof'>PROF</div>
            <div className='inline save'>SAVE</div>
            <div className='inline bonus'>BONUS</div>
          </li>
          <Save stat={ this.state.strength } />
          <Save stat={ this.state.dexterity } />
          <Save stat={ this.state.constitution } />
          <Save stat={ this.state.intelligence } />
          <Save stat={ this.state.wisdom } />
          <Save stat={ this.state.charisma } />
        </ul>
      </div>
    );
  }
}

export default Saves;
