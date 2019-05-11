import React from 'react';
import './character-name.css';

class CharacterName extends React.Component {
  render() {
    return (
      <div className='character-name inline'>
        <span>
          {this.props.name}
        </span>
      </div>
    );
  }
}

export default CharacterName;
