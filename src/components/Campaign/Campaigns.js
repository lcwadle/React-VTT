import React from 'react';

function Campaign({campaign}) {
    return <button className='inner-tile ui segment'>{campaign}</button>;
}

class Campaigns extends React.Component {
  state = {
    campaigns: [
      {
        name: 'Horde of the Dragon Queen',
        id: 1
      },
      {
        name: 'Rise of Tiamat',
        id: 2
      },
      {
        name: 'Waterdeep: Dungeon of the Mad Mage',
        id: 3
      },
      {
        name: 'Waterdeep: Dungeon of the Mad Mage',
        id: 4
      },
      {
        name: 'Waterdeep: Dungeon of the Mad Mage',
        id: 5
      },
      {
        name: 'Waterdeep: Dungeon of the Mad Mage',
        id: 6
      }
    ]
  }

  render() {
    return (
      <div>
        <div className='tiles'>
          {this.state.campaigns.map((campaign) => (
            <Campaign campaign={campaign.name} key={campaign.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Campaigns;
