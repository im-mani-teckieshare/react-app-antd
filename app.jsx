import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Layout, Drawer, Button, Icon, Menu } from "antd";
const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
  state = { visible: false, right: "0px", icon: "left" };

  showDrawer = () => {
    this.setState({
      visible: !this.state.visible,
      right: !this.state.visible ? "257px" : "0px",
      icon: !this.state.visible ? "right" : "left"
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
      right: "0px",
      icon: "left"
    });
  };

  render() {
    const buttonStyle = {
      position: "fixed",
      right: this.state.right,
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
      top: "50%"
    };
    return (
      <Layout
        style={{
          height: "100vh",
          overflow: "hidden",
          position: "relative",
          border: "1px solid #ebedf0",
          borderRadius: 2,
          textAlign: "center",
          background: "#fafafa"
        }}
      >
        <Header theme="light">
          <div className="TeckiShare" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>

        <Layout>
          <Sider collapsible={true} defaultCollapsed="true" collapsedWidth={0} reverseArrow={false} theme="light">left sidebar</Sider>
          <Button style={buttonStyle} type="primary" onClick={this.showDrawer}>
            <Icon type={this.state.icon} />
          </Button>
          <Drawer
            title="Basic Drawer"
            placement="right"
            closable={false}
            maskStyle={{ background: "transparent" }}
            onClose={this.onClose}
            visible={this.state.visible}
            getContainer={false}
            style={{ position: "absolute" }}
          >
            <p>Some contents...</p>
          </Drawer>
          <Content style={{ margin: "0", background: "red" }} >Some Content </Content>
        </Layout>
        <Footer style={{ textAlign: "center" }}>
          Drawer with Handler Created By Teckieshare
        </Footer>

      </Layout>
    );
  }
}
export default App;
