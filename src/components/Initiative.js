import React from 'react';
import './initiative.css';

class Initiative extends React.Component {
  addPlusToBonus(bonus) {
    if (bonus >= 0) {
      return '+' + bonus;
    }

    return bonus;
  }

  render() {
    return (
      <div className='initiative ui segment'>
        <ul>
          <li className='modifier-large'>
            {this.addPlusToBonus(this.props.value)}
          </li>
          <li className='header'>
            Initiative
          </li>
        </ul>
      </div>
    );
  }
}

export default Initiative;
