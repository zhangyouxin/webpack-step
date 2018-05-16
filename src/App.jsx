import React, { PureComponent } from 'react';
import { Button, Layout } from 'element-react';

class App extends PureComponent {
    render() {
        return (
            <div style={{height: 100}}>
                hehe

                <Button type='primary'>Click</Button>
                <div>
                    <Layout.Row>
                        <Layout.Col span="24"><div className="grid-content bg-purple-dark"></div></Layout.Col>
                    </Layout.Row>
                    <Layout.Row>
                        <Layout.Col span="12"><div className="grid-content bg-purple"></div></Layout.Col>
                        <Layout.Col span="12"><div className="grid-content bg-purple-light"></div></Layout.Col>
                    </Layout.Row>
                </div>
            </div>
        )
    }
}
export default App;