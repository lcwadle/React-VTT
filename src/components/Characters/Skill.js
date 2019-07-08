import React from 'react';
import './skills.css';

class Skill extends React.Component {
  proficiencyBubbles(prof) {
    switch(prof) {
      case 1:
        return (
          <div className='inline row prof'>
            <i className='circle icon' />
            <i className='circle outline icon' />
            <i className='circle outline icon' />
            <i className='circle outline icon' />
          </div>
        );
      case 2:
        return (
          <div className='inline row prof'>
            <i className='circle outline icon' />
            <i className='circle icon' />
            <i className='circle outline icon' />
            <i className='circle outline icon' />
          </div>
        );
      case 3:
        return (
          <div className='inline row prof'>
            <i className='circle outline icon' />
            <i className='circle outline icon' />
            <i className='circle icon' />
            <i className='circle outline icon' />
          </div>
        );
      case 4:
        return (
          <div className='inline row prof'>
            <i className='circle outline icon' />
            <i className='circle outline icon' />
            <i className='circle outline icon' />
            <i className='circle icon' />
          </div>
        );
      default:
        return (
          <div className='inline row prof'>
            <i className='circle outline icon' />
            <i className='circle outline icon' />
            <i className='circle outline icon' />
            <i className='circle outline icon' />
          </div>
        );
    }
  }

  proficiencyBonus(prof, level) {
    switch(prof) {
      case 1:
        return level + 2;
      case 2:
        return level + 4;
      case 3:
        return level + 6;
      case 4:
        return level + 8;
      default:
        return 0;
    }
  }

  addPlusToBonus(bonus) {
    if (bonus >= 0) {
      return '+' + bonus;
    }

    return bonus;
  }

  render() {
    return (
      <li className='skills'>
        <div className='inline row skill'>
          {this.props.skill.name}
        </div>
        <div className='inline row mod'>
          {this.props.skill.modName}
        </div>
        <div className='inline row mod'>
          {this.addPlusToBonus(this.props.skill.modValue)}
        </div>
        {this.proficiencyBubbles(this.props.skill.prof)}
        <div className='inline row bonus'>
          {this.addPlusToBonus(this.proficiencyBonus(this.props.skill.prof, this.props.skill.level))}
        </div>
      </li>
    );
  }
}

export default Skill;
