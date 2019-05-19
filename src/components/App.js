import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Campaigns from './Campaign/Campaigns';
import Characters from './Creatures/Characters';
import Modules from './Modules/Modules';
import './app.css';



class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path='/' exact component={Home} />
          <Route path='/campaigns/' component={Campaigns} />
          <Route path='/modules/' component={Modules} />
          <Route path='/characters/' component={Characters} />
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
    <div className='ui segment'>
      <div className='header-main menu-item'>
        <Link className='header-title' to='/'>D&D VTT</Link>
      </div>
      <div className='menu-item'>
        <div className='header-link'>
          <Link className='menu-item' to='/campaigns/'>Campaigns</Link>
        </div>
        <div className='header-link'>
          <Link className='menu-item' to='/modules'>Modules</Link>
        </div>
        <div className='header-link'>
          <Link className='menu-item' to='/characters'>Characters</Link>
        </div>
      </div>
      <i class="user outline icon large login"></i>
    </div>
  );
}

export default App;
