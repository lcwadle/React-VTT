import React from 'react';
import './temp-hit-points.css';

class TempHitPoints extends React.Component {
  render() {
    return (
      <div className='temp-hit-points ui segment'>
        <ul>
          <li className='modifier-large'>
            {this.props.value}
          </li>
          <li className='header'>
            Temporary Hit Points
          </li>
        </ul>
      </div>
    );
  }
}

export default TempHitPoints;
