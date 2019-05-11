import React from 'react';
import './character-details.css';

class CharacterDetails extends React.Component {
  render() {
    return (
      <div className='character-details inline'>
        <ul style={{listStyle: 'none'}}>
          <li>
            <div>
              <span>
                {this.props.classes}
              </span>
            </div>
            <div>
              <span>
                {this.props.levels}
              </span>
            </div>
            <div>
              <span>
                {this.props.race}
              </span>
            </div>
          </li>
          <li className='header headerBelow'>
            <div>
              Class
            </div>
            <div>
              Level
            </div>
            <div>
              Race
            </div>
          </li>
          <li>
            <div>
              <span>
                {this.props.alignment}
              </span>
            </div>
            <div>
              <span>
                {this.props.background}
              </span>
            </div>
            <div>
              <span>
                {this.props.experiencePoints}
              </span>
            </div>
          </li>
          <li className='header headerBelow'>
            <div>
              Alignment
            </div>
            <div>
              Background
              </div>
            <div>
              Experience Points
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default CharacterDetails;
