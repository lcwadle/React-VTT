import React from 'react';
import Skill from './Skill';
import './skills.css';

class Skills extends React.Component {
  render() {
    return (
      <div className='skills ui segment'>
        <ul>
          <li className='skill-header'>
            <div className='inline prof'>PROF</div>
            <div className='inline mod'>MOD</div>
            <div className='inline skill'>SKILL</div>
            <div className='inline bonus'>BONUS</div>
          </li>
          {this.props.skills.map((skill) => (
            <Skill stat={skill} prof={this.props.prof} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Skills;
