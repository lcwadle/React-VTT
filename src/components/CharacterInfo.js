import React from 'react';
import CharacterName from './CharacterName';
import CharacterDetails from './CharacterDetails';
import './character-info.css';

class CharacterInfo extends React.Component {
  render() {
    return (
      <div className='character-info ui segment'>
        <CharacterName name={this.props.name}/>
        <CharacterDetails classes={this.props.class} levels={this.props.level} race={this.props.race} alignment={this.props.alignment} background={this.props.background} experiencePoints={this.props.experiencePoints} />
      </div>
    );
  }
}

export default CharacterInfo;
