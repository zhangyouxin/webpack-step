import React, { PureComponent } from 'react';
import MoodComponent from './MoodComponent';
let style = require('./style/MoodArea.scss');

class MoodArea extends PureComponent {
  render() {
    return (
      <div className='mood-area' >
        <MoodComponent/>
        <MoodComponent/>
        <MoodComponent/>
        <MoodComponent/>
        <MoodComponent/>
        <MoodComponent/>
        <MoodComponent/>
        <MoodComponent/>
      </div>
    )
  }
}
export default MoodArea;