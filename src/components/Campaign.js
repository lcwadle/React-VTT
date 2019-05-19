import React from 'react';
import './campaign.css';

class Campaign extends React.Component {
  render() {
    return (
      <button className='campaign ui segment'>{this.props.name}</button>
    );
  }
}

export default Campaign;
