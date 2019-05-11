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
        <div style={{fontWeight: 'bold', fontSize: '20px'}}>
          {this.addPlusToBonus(this.props.stat.bonus)}
        </div>
        <div style={{fontWeight: 'bold'}}>
          {this.props.stat.score}
        </div>
      </div>
    );
  }
}

export default AbilityScore;
