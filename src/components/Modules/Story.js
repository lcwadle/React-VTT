import React from 'react';
import SearchBar from './SearchBar';
import './Story.css';

class Story extends React.Component {
  render() {
    return (
      <div className='story ui segment'>
        <SearchBar />
      </div>
    );
  }
}

export default Story;
