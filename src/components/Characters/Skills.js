import React from 'react';
import Skill from './Skill';
import './skills.css';

class Skills extends React.Component {
  render() {
    return (
      <div className='skills ui segment'>
        <ul>
          {this.props.skills.map((skill) => (
            <Skill skill={skill}/>
          ))}
        </ul>
      </div>
    );
  }
}

export default Skills;
