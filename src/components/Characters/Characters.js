import React from 'react';
import CharacterSheet from './CharacterSheet';
import Character from './Character';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Characters() {
  return (
    <Router>
      <div>
        <Route exact path='/characters' component={Home} />
        <Route path='/characters/new' component={CharacterSheet} />
        <Route path='/characters/:id' component={Character} />
      </div>
    </Router>
  )
}

function CharacterTile({character}) {
  return (
    <Link className='inner-tile ui segment' to={`characters/${character.id}`}>{character.name}</Link>
  );
}

function NewCharacter() {
  return (
    <Link className='inner-tile ui segment' to={`characters/new`}>New Character</Link>
  );
}

class Home extends React.Component {
  state = {
    characters: [
      {
        name: 'SRD Classes',
        id: 2
      }
    ]
  }

  render() {
    return (
      <div>
        <form>
        <div className='tiles'>
          <NewCharacter />
          {this.state.characters.map((character) => (
            <CharacterTile character={character} key={character.id} />
          ))}
        </div>
        </form>
      </div>
    );
  }
}


export default Characters;
