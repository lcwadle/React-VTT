import React from 'react';
import Save from './Save';
import './saves.css';

class Saves extends React.Component {
  render() {
    return (
      <div className='saves ui segment'>
        <ul>
          {this.props.saves.map((save) => (
            <Save stat={save} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Saves;
