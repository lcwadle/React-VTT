import React from 'react';
import './ability-score.css';

class AbilityScore extends React.Component {
  addPlusToBonus(bonus) {
    if (bonus >= 0) {
      return '+' + bonus;
    }

    return bonus;
  }

  render() {
    return (
      <div className='ability-score inline ui segment'>
        <div className='header'>
          {this.props.stat.name}
        </div>
        <div className='modifier-large'>
          {this.addPlusToBonus(this.props.stat.bonus)}
        </div>
        <div>
          {this.props.stat.score}
        </div>
      </div>
    );
  }
}

export default AbilityScore;
