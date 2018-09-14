import React, { PureComponent } from 'react';
let style = require('./style/header.scss');

class Header extends PureComponent {
    render() {
        return (
            <div className='header' >
             <div className='logo' > 焦虑笔记 </div>
            </div>
        )
    }
}
export default Header;