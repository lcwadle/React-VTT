import React from 'react';
import Page from './Page';
import Campaigns from './Campaigns';

class PageRender extends React.Component {
  constructor() {
    super();

    const campaigns = [];

    this.state = {
      page: <Page title='Campaigns' content=<Campaigns campaigns={campaigns} />/>
    }
  }

  componentDidMount() {
    const campaigns = [
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
    ];

    this.setState({page: <Page title='Campaigns' content=<Campaigns campaigns={campaigns} />/>});
  }

  render() {
    return (
      <div>
        {this.state.page}
      </div>
    );
  }
}

export default PageRender;
