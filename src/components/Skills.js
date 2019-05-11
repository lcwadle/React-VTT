import React from 'react';
import Skill from './Skill';
import './skills.css';

class Skills extends React.Component {
  state = {
    acrobatics: {
      prof: true,
      name: 'Acrobatics',
      mod: 'DEX',
      bonus: 4
    },
    animalHandling: {
      prof: false,
      name: 'Animal Handling',
      mod: 'WIS',
      bonus: 1
    },
    arcana: {
      prof: false,
      name: 'Arcana',
      mod: 'INT',
      bonus: 1
    },
    athletics: {
      prof: false,
      name: 'Athletics',
      mod: 'STR',
      bonus: -1
    },
    deception: {
      prof: true,
      name: 'Deception',
      mod: 'CHA',
      bonus: 6
    },
    history: {
      prof: false,
      name: 'History',
      mod: 'INT',
      bonus: 1
    },
    insight: {
      prof: false,
      name: 'Insight',
      mod: 'WIS',
      bonus: 1
    },
    intimidation: {
      prof: true,
      name: 'Intimidation',
      mod: 'CHA',
      bonus: 6
    },
    investigation: {
      prof: false,
      name: 'Investigation',
      mod: 'INT',
      bonus: 1
    },
    medicine: {
      prof: false,
      name: 'Medicine',
      mod: 'WIS',
      bonus: 1
    },
    nature: {
      prof: false,
      name: 'Nature',
      mod: 'WIS',
      bonus: 1
    },
    perception: {
      prof: false,
      name: 'Perception',
      mod: 'WIS',
      bonus: 1
    },
    performance: {
      prof: true,
      name: 'Performance',
      mod: 'CHA',
      bonus: 6
    },
    persuasion: {
      prof: true,
      name: 'Persuasion',
      mod: 'CHA',
      bonus: 6
    },
    religion: {
      prof: false,
      name: 'Religion',
      mod: 'INT',
      bonus: 1
    },
    sleightOfHand: {
      prof: false,
      name: 'Sleight of Hand',
      mod: 'DEX',
      bonus: 2
    },
    stealth: {
      prof: false,
      name: 'Stealth',
      mod: 'DEX',
      bonus: 2
    },
    survival: {
      prof: false,
      name: 'Survival',
      mod: 'WIS',
      bonus: 1
    }
  }

  render() {
    return (
      <div className='skills ui segment'>
        <ul>
          <li className='skill-header'>
            <div className='inline prof'>PROF</div>
            <div className='inline mod'>MOD</div>
            <div className='inline skill'>SKILL</div>
            <div className='inline bonus'>BONUS</div>
          </li>
          <Skill stat={ this.state.acrobatics } />
          <Skill stat={ this.state.animalHandling } />
          <Skill stat={ this.state.arcana } />
          <Skill stat={ this.state.acrobatics } />
          <Skill stat={ this.state.athletics } />
          <Skill stat={ this.state.deception } />
          <Skill stat={ this.state.history } />
          <Skill stat={ this.state.insight } />
          <Skill stat={ this.state.intimidation } />
          <Skill stat={ this.state.investigation } />
          <Skill stat={ this.state.medicine } />
          <Skill stat={ this.state.nature } />
          <Skill stat={ this.state.perception } />
          <Skill stat={ this.state.performance } />
          <Skill stat={ this.state.persuasion } />
          <Skill stat={ this.state.religion } />
          <Skill stat={ this.state.sleightOfHand } />
          <Skill stat={ this.state.stealth } />
          <Skill stat={ this.state.survival } />
        </ul>
      </div>
    );
  }
}

export default Skills;
