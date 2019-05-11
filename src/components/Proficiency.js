import React from 'react';
import './proficiency.css';

class Proficiency extends React.Component {
  render() {
    return (
      <div className='proficiency ui segment'>
        <ul>
          <li>
            <div className='value'>1</div>
            <div className='label'>Proficiency Bonus</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Proficiency;
