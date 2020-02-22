import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { Drawer, Button,Icon } from 'antd';

class App extends React.Component {
  state = { visible: false,right:'0px',icon:'menu-unfold' };

  showDrawer = () => {
    this.setState({
      visible: !this.state.visible,
      right: !this.state.visible ?'257px':'0px',
      icon:'menu-fold'
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
      right:'0px',
      icon:'menu-unfold'
    });
  };

  render() {
    const buttonStyle = {position:"fixed",right:this.state.right,
    width: "30px",
    height: "60px",
    justifyContent: "center",
    display: "flex",
    background: "white",
    color: "black",
    borderColor: "#cccbcb",
    boxShadow: "rgba(0, 0, 0, 0.15) -2px 0px 8px",
    border: "none",
    zIndex: "1001",
    top:'50%'}
    return (
      <div
        style={{
          height: '100vh',
          overflow: 'hidden',
          position: 'relative',
          border: '1px solid #ebedf0',
          borderRadius: 2,
          padding: 48,
          textAlign: 'center',
          background: '#fafafa',
        }}
      >
        Render in this
        <div style={{ marginTop: 16 }}>
          <Button style={buttonStyle} type="primary" onClick={this.showDrawer}>
           <Icon type={this.state.icon} />
          </Button>
        </div>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          maskStyle = {{background:"transparent"}}
          onClose={this.onClose}
          visible={this.state.visible}
          getContainer={false}
          style={{ position: 'absolute' }}
        >
          <p>Some contents...</p>
        </Drawer>
      </div>
    );
  }
}
export default App;

