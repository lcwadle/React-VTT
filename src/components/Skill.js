import React from 'react';
import './skills.css';

class Skill extends React.Component {
  isProficient(proficient) {
    if (proficient) {
      return <i className='circle icon' />;
    }

    return <i className='circle outline icon' />;
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
        <div className='inline row prof'>
          {this.isProficient(this.props.stat.prof)}
        </div>
        <div className='inline row mod'>
          {this.props.stat.mod}
        </div>
        <div className='inline row skill'>
          {this.props.stat.name}
        </div>
        <div className='inline row bonus'>
          {this.addPlusToBonus(this.props.stat.bonus)}
        </div>
      </li>
    );
  }
}

export default Skill;
