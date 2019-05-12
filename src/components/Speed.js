import React from 'react';
import './speed.css';

class Speed extends React.Component {
  render() {
    return (
      <div className='initiative ui segment'>
        <ul>
          <li className='modifier-large'>
            {` ${this.props.value} ft.`}
          </li>
          <li className='header'>
            Speed
          </li>
        </ul>
      </div>
    );
  }
}

export default Speed;
