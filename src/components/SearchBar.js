import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className='ui'>
        <form className='ui form'>
          <div className='field'>
            <input type='text'/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
