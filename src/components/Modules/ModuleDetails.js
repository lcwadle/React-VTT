import React from 'react';
import SearchBar from '../SearchBar';

class ModuleDetails extends React.Component {
  state = {
    id: this.props.match.params.id
  }

  render() {
    return (
      <div className='tall columns'>
        <div className='column left'>
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default ModuleDetails;
