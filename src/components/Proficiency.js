import React from 'react';
import './proficiency.css';

class Proficiency extends React.Component {
  render() {
    return (
      <div className='proficiency ui segment'>
        <ul>
          <li>
            <div className='value'>{`+ ${this.props.value}`}</div>
            <div className='label'>Proficiency Bonus</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Proficiency;
