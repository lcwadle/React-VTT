import React from 'react';
import './saves.css';

class Save extends React.Component {
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
      <li className='saves'>
        <div className='inline row prof'>
          {this.isProficient(this.props.stat.prof)}
        </div>
        <div className='inline row save'>
          {this.props.stat.name}
        </div>
        <div className='inline row bonus'>
          {this.addPlusToBonus(this.props.stat.bonus)}
        </div>
      </li>
    );
  }
}

export default Save;
