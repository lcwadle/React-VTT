import React from 'react';
import ModuleDetails from './ModuleDetails';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Modules extends React.Component {
  state = {
    modules: [
        {
          name: 'SRD Monsters',
          id: 1
        },
        {
          name: 'SRD Classes',
          id: 2
        }
    ]
  }
  render() {
    return (
      <Router>
        <div className='tall'>
          <Route exact path='/modules' component={Home} />
          <Route path='/modules/:id' component={ModuleDetails} />
        </div>
      </Router>
    );
  }
}

function Module({module}) {
  return (
    <Link className='inner-tile ui segment' to={`/modules/${module.id}`}>{module.name}</Link>
  );
}

class Home extends React.Component {
  state = {
    modules: [
      {
        name: 'SRD Monsters',
        id: 1
      },
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
          {this.state.modules.map((module) => (
            <Module module={module} key={module.id} />
          ))}
        </div>
        </form>
      </div>
    );
  }
}

export default Modules;
