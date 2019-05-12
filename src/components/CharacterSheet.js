import React from 'react';
import CharacterInfo from './CharacterInfo';
import AbilityScores from './AbilityScores';
import Inspiration from './Inspiration';
import Proficiency from './Proficiency';
import Saves from './Saves';
import Skills from './Skills';
import Initiative from './Initiative';
import Speed from './Speed';
import HitPoints from './HitPoints';
import TempHitPoints from './TempHitPoints';
import './character-sheet.css';

class CharacterSheet extends React.Component {
  state = {
    name: 'Elon Muskhollow',
    class: 'Bard',
    level: 1,
    race: 'Half-Elf',
    alignment: 'Chaotic Good',
    background: 'Entertainer',
    experiencePoints: 0,
    initiative: 2,
    speed: 35,
    currentHitPoints: 100,
    maxHitPoints: 120,
    tempHitPoints: 10,
    abilityScores: [
      {
        name: 'Strength',
        bonus: -1,
        score: 8,
        prof: false
      },
      {
        name: 'Dexterity',
        bonus: 2,
        score: 14,
        prof: true
      },
      {
        name: 'Constitution',
        bonus: 3,
        score: 16,
        prof: false
      },
      {
        name: 'Intelligence',
        bonus: 1,
        score: 12,
        prof: false
      },
      {
        name: 'Wisdom',
        bonus: 1,
        score: 13,
        prof: false
      },
      {
        name: 'Charisma',
        bonus: 4,
        score: 19,
        prof: true
      }
    ],
    skills: [
      {
        prof: true,
        name: 'Acrobatics',
        mod: 'DEX',
        bonus: 1
      },
      {
        prof: false,
        name: 'Animal Handling',
        mod: 'WIS',
        bonus: 1
      },
      {
        prof: false,
        name: 'Arcana',
        mod: 'INT',
        bonus: 1
      },
      {
        prof: false,
        name: 'Athletics',
        mod: 'STR',
        bonus: 1
      },
      {
        prof: true,
        name: 'Deception',
        mod: 'CHA',
        bonus: 1
      },
      {
        prof: false,
        name: 'History',
        mod: 'INT',
        bonus: 1
      },
      {
        prof: false,
        name: 'Insight',
        mod: 'WIS',
        bonus: 1
      },
      {
        prof: true,
        name: 'Intimidation',
        mod: 'CHA',
        bonus: 1
      },
      {
        prof: false,
        name: 'Investigation',
        mod: 'INT',
        bonus: 1
      },
      {
        prof: false,
        name: 'Medicine',
        mod: 'WIS',
        bonus: 1
      },
      {
        prof: false,
        name: 'Nature',
        mod: 'WIS',
        bonus: 1
      },
      {
        prof: false,
        name: 'Perception',
        mod: 'WIS',
        bonus: 1
      },
      {
        prof: true,
        name: 'Performance',
        mod: 'CHA',
        bonus: 1
      },
      {
        prof: true,
        name: 'Persuasion',
        mod: 'CHA',
        bonus: 1
      },
      {
        prof: false,
        name: 'Religion',
        mod: 'INT',
        bonus: 1
      },
      {
        prof: false,
        name: 'Sleight of Hand',
        mod: 'DEX',
        bonus: 1
      },
      {
        prof: false,
        name: 'Stealth',
        mod: 'DEX',
        bonus: 1
      },
      {
        prof: false,
        name: 'Survival',
        mod: 'WIS',
        bonus: 1
      }
    ]
  }

  calcProficiencyBonus(level) {
    return parseInt(level / 4 + 2);
  }

  render() {
    return (
      <div className='character-sheet ui segment'>
        <CharacterInfo
          name={this.state.name}
          class={this.state.class}
          level={this.state.level}
          race={this.state.race}
          alignment={this.state.alignment}
          background={this.state.background}
          experiencePoints={this.state.experiencePoints}
        />
        <div>
          <Initiative value={this.state.initiative}/>
          <Speed value={this.state.speed} />
          <HitPoints current={this.state.currentHitPoints} max={this.state.maxHitPoints} />
          <TempHitPoints value={this.state.tempHitPoints} />
        </div>
        <div className='left ui segment'>
          <div className='primary-stats'>
            <AbilityScores abilityScores={this.state.abilityScores} />
          </div>
          <div className='secondary-stats'>
            <Proficiency value={this.calcProficiencyBonus(this.state.level)}/>
            <Saves
              abilityScores={this.state.abilityScores}
              prof={this.calcProficiencyBonus(this.state.level)}
            />
            <Skills
              skills={this.state.skills}
              prof={this.calcProficiencyBonus(this.state.level)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterSheet;
