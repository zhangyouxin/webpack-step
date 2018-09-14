import React, { PureComponent } from 'react';
let style = require('./style/MoodComponent.scss');

class MoodComponent extends PureComponent {
  render() {
    return (
      <div className='mood-container' >
        <div > 一个面板 </div>
      </div>
    )
  }
}
export default MoodComponent;