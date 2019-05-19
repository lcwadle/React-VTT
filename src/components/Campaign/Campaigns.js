import React from 'react';
import Campaign from './Campaign';
import './campaigns.css';

class Campaigns extends React.Component {
  state = {
    campaigns: [
      {
        name: 'Horde of the Dragon Queen'
      },
      {
        name: 'Rise of Tiamat'
      },
      {
        name: 'Waterdeep: Dungeon of the Mad Mage'
      },
      {
        name: 'Waterdeep: Dungeon of the Mad Mage'
      },
      {
        name: 'Waterdeep: Dungeon of the Mad Mage'
      },
      {
        name: 'Waterdeep: Dungeon of the Mad Mage'
      }
    ]
  }

  render() {
    return (
      <div>
        <div className='tiles'>
          {this.state.campaigns.map((campaign) => (
            <Campaign name={campaign.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default Campaigns;
