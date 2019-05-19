import React from 'react';
import './primary-stat.css';

class PrimaryStat extends React.Component {
  render() {
    return (
      <div className='primary-stat ui segment'>
        <ul>
          <li className='modifier-large'>
            {this.props.value}
          </li>
          <li className='header'>
            {this.props.name}
          </li>
        </ul>
      </div>
    );
  }
}

export default PrimaryStat;
