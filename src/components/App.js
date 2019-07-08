import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Campaigns from './Campaign/Campaigns';
import Characters from './Characters/Characters';
import Modules from './Modules/Modules';
import Monsters from './Monsters/Monsters';
import './app.css';



class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='box'>
          <Header />
          <div className='row content'>
            <Route path='/' exact component={Home} />
            <Route path='/campaigns/' component={Campaigns} />
            <Route path='/modules/' component={Modules} />
            <Route path='/characters/' component={Characters} />
            <Route path='/monsters/' component={Monsters} />
          </div>
        </div>
      </Router>
    );
  }
}

function Home() {
  return <h2>Home</h2>
}

function Header() {
  return (
    <div className='row header'>
      <div className='header-main menu-item'>
        <Link className='header-title' to='/'>Pathfinder Second Edition</Link>
      </div>
      <div className='menu-item'>
        <div className='header-link'>
          <Link className='menu-item' to='/campaigns'>Campaigns</Link>
        </div>
        <div className='header-link'>
          <Link className='menu-item' to='/modules'>Modules</Link>
        </div>
        <div className='header-link'>
          <Link className='menu-item' to='/characters'>Characters</Link>
        </div>
        <div className='header-link'>
          <Link className='menu-item' to='/monsters'>Monsters</Link>
        </div>
      </div>
      <i className="user outline icon large login"></i>
    </div>
  );
}

export default App;
