import React from 'react';
import CharacterInfo from './CharacterInfo';
import AbilityScores from './AbilityScores';
import Inspiration from './Inspiration';
import Saves from './Saves';
import Skills from './Skills';
import PrimaryStat from './PrimaryStat';
import Actions from './Actions';
import './character-sheet.css';

class CharacterSheet extends React.Component {
  state = {
    name: '',
    class: '',
    level: 0,
    level: 0,
    ancestry: '',
    alignment: '',
    background: '',
    experiencePoints: 0,
    speed: 0,
    currentHitPoints: 0,
    maxHitPoints: 0,
    tempHitPoints: 0,
    armorClass: 0,
    abilityScores: [],
    skills: []
  }

  getAbilityModifier(ability, abilityScores) {
    switch(ability) {
      case 'STR':
        return abilityScores.strength;
      case 'DEX':
        return Math.floor((abilityScores.dexterity - 10) / 2)
      case 'CON':

      case 'WIS':

      case 'INT':

      case 'CHA':

      default:
        return 0;
    }
  }

  componentDidMount() {
    const character = {
      name: 'Elon Muskhollow',
      class: 'Bard',
      level: 15,
      ancestry: 'Half-Elf',
      background: 'Entertainer',
      alignment: 'Chaotic Good',
      experiencePoints: 0,
      currentHitPoints: 100,
      maxHitPoints: 120,
      tempHitPoints: 10,
      armorClass: 13,
      touchArmorClass: 13,
      heroPoints: 0,
      abilityScores: {
        strength: 8,
        dexterity: 14,
        constitution: 16,
        intelligence: 12,
        wisdom: 13,
        charisma: 19
      },
      savingThrows: {
        fortitude: 0,
        reflex: 2,
        will: 1
      },
      skills: [
        {
          name: 'Perception',
          value: 0,
          ability: 'WIS'
        },
        {
          name: 'Acrobatics',
          value: 1,
          ability: 'DEX'
        },
        {
          name: 'Arcana',
          value: 1,
          ability: 'INT'
        },
        {
          name: 'Athletics',
          value: 1,
          ability: 'STR'
        },
        {
          name: 'Crafting',
          value: 3,
          ability: 'INT'
        },
        {
          name: 'Deception',
          value: 1,
          ability: 'CHA'
        },
        {
          name: 'Diplomacy',
          value: 0,
          ability: 'CHA'
        },
        {
          name: 'Intimidation',
          value: 0,
          ability: 'CHA'
        },
        {
          name: 'Lore - Blah 1',
          value: 1,
          ability: 'INT'
        },
        {
          name: 'Lore - Blah 2',
          value: 1,
          ability: 'INT'
        },
        {
          name: 'Medicine',
          value: 0,
          ability: 'WIS'
        },
        {
          name: 'Nature',
          value: 4,
          ability: 'WIS'
        },
        {
          name: 'Occultism',
          value: 1,
          ability: 'INT'
        },
        {
          name: 'Performance',
          value: 0,
          ability: 'CHA'
        },
        {
          name: 'Religion',
          value: 2,
          ability: 'WIS'
        },
        {
          name: 'Society',
          value: 1,
          ability: 'INT'
        },
        {
          name: 'Stealth',
          value: 0,
          ability: 'DEX'
        },
        {
          name: 'Survival',
          value: 1,
          ability: 'WIS'
        },
        {
          name: 'Thievery',
          value: 0,
          ability: 'DEX'
        }
      ]
    };

    this.setState({
      name: character.name,
      class: character.class,
      level: character.level,
      ancestry: character.ancestry,
      background: character.background,
      alignment: character.alignment,
      experiencePoints: character.experiencePoints,
      combatInfo: {
        currentHitPoints: character.currentHitPoints,
        maxHitPoints: character.maxHitPoints,
        tempHitPoints: character.tempHitPoints,
        armorClass: character.armorClass,
        touchArmorClass: character.touchArmorClass,
        heroPoints: character.heroPoints,
      },
      savingThrows: [
        {
          name: 'Fortitude',
          score: character.savingThrows.fortitude
        },
        {
          name: 'Reflex',
          score: character.savingThrows.reflex
        },
        {
          name: 'Will',
          score: character.savingThrows.will
        }
      ],
      abilityScores: [
        {
          name: 'Strength',
          score: character.abilityScores.strength
        },
        {
          name: 'Dexterity',
          score: character.abilityScores.dexterity
        },
        {
          name: 'Constitution',
          score: character.abilityScores.constitution
        },
        {
          name: 'Intelligence',
          score: character.abilityScores.intelligence
        },
        {
          name: 'Wisdom',
          score: character.abilityScores.wisdom
        },
        {
          name: 'Charisma',
          score: character.abilityScores.charisma
        }
      ],
      skills: character.skills.map(skill => (
        {
          prof: skill.value,
          name: skill.name,
          modName: skill.ability,
          modValue: this.getAbilityModifier(skill.ability, character.abilityScores),
          level: character.level
        }
      ))
    });
  }

  render() {
    return (
      <div className='character-sheet ui segment'>
        <CharacterInfo
          name={this.state.name}
          class={this.state.class}
          level={this.state.level}
          ancestry={this.state.ancestry}
          alignment={this.state.alignment}
          background={this.state.background}
          experiencePoints={this.state.experiencePoints}
        />
        <div className='left'>
          <div className='primary-stats'>
            <div className='header center'>
              Ability Scores
            </div>
            <AbilityScores abilityScores={this.state.abilityScores} />
          </div>
          <div className='secondary-stats'>
            <div className='header center'>
              Skills
            </div>
            <Skills
              skills={this.state.skills}
            />
          </div>
        </div>
        <div className='middle ui segment'>
          <Actions />
        </div>
      </div>
    );
  }
}

export default CharacterSheet;
