import React from 'react';
import './hit-points.css';

class HitPoints extends React.Component {
  render() {
    return (
      <div className='hit-points ui segment'>
        <ul>
          <li className='modifier-large'>
            {` ${this.props.current} / ${this.props.max}`}
          </li>
          <li className='header'>
            Current Hit Points
          </li>
        </ul>
      </div>
    );
  }
}

export default HitPoints;
