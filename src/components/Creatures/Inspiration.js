import React from 'react';
import './inspiration.css';

class Inspiration extends React.Component {
  render() {
    return (
      <div className='inspiration ui segment'>
        <ul>
          <li>
            <div className='value'>1</div>
            <div className='label'>Inspiration</div>
           </li>
        </ul>
      </div>
    );
  }
}

export default Inspiration;
