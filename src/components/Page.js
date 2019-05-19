import React from 'react';

class Page extends React.Component {
  render() {
    return (
      <div>
        <div className='page-title'>{this.props.title}</div>
        {this.props.content}
      </div>
    );
  }
}

export default Page;
