import React from 'react';
import Campaign from './Campaign';
import './campaigns.css';

class Campaigns extends React.Component {
  render() {
    return (
      <div>
        <div className='tiles'>
          <Campaign name='New Campaign' />
          {this.props.campaigns.map((campaign) => (
            <Campaign name={campaign.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default Campaigns;
