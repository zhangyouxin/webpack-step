import React, { PureComponent } from 'react';
import { Button, Layout } from 'element-react';
import Header from './component/header';
import MoodArea from './component/MoodArea';

class App extends PureComponent {


    render() {
      let baidu = 'http://www.baidu.com'
      let urlLink = 'https://payment.nike.com/cn/checkout/wechatPay?orderId=C00033051815&visitId=10&visitorId=e1dfd264-b510-4a9d-bf32-1c4f72f3b5e2&paymentId=f74874ad-610a-45f1-aa72-0c955eef755b';
      urlLink = urlLink + '?time='+((new Date()).getTime());
        return (
            <div>
                <Header/>
                <MoodArea/>
            </div>
        )
    }
}
export default App;