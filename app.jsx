import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Layout, Drawer, Button, Icon, Menu, Row, Col, Table,Timeline } from "antd";
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
    const dataSource = [
      {
        key: "1",
        name: "Mike",
        age: 32,
        address: "10 Downing Street"
      },
      {
        key: "2",
        name: "John",
        age: 42,
        address: "10 Downing Street"
      }
    ];

    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age"
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address"
      }
    ];

    const zeroTriggerStyle = {
      background: "transparent",
    border: "1px groove rgba(255, 247, 247, 0.65)",
    top:"0"
    }

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
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px",display:"flex" }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>

        <Layout>
          <Sider
            collapsible={true}
            defaultCollapsed="true"
            collapsedWidth={0}
            reverseArrow={false}
            theme="light"
            zeroWidthTriggerStyle={zeroTriggerStyle}
          >
           <Menu>
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
           </Menu>
          </Sider>
          <Button style={buttonStyle} type="primary" onClick={this.showDrawer}>
            <Icon type={this.state.icon} />
          </Button>
          <Drawer
            title="Drawer With Handle"
            placement="right"
            closable={false}
            maskStyle={{ background: "transparent" }}
            onClose={this.onClose}
            visible={this.state.visible}
            getContainer={false}
            style={{ position: "absolute" }}
            mask={false}
            maskClosable={false}
          >
            <p>Some contents...</p>
          </Drawer>
          <Content style={{ margin: "0", background: "#fff" }}>
            <div className="gutter-example">
              <Row gutter={16}>
                <Col className="gutter-row" span={12}>
                  <Table dataSource={dataSource} columns={columns} />;
                </Col>
                <Col className="gutter-row" span={12}>
                  <Timeline>
                    <Timeline.Item color="green">
                      Create a services site 2015-09-01
                    </Timeline.Item>
                    <Timeline.Item color="green">
                      Create a services site 2015-09-01
                    </Timeline.Item>
                    <Timeline.Item color="red">
                      <p>Solve initial network problems 1</p>
                      <p>Solve initial network problems 2</p>
                      <p>Solve initial network problems 3 2015-09-01</p>
                    </Timeline.Item>
                    <Timeline.Item>
                      <p>Technical testing 1</p>
                      <p>Technical testing 2</p>
                      <p>Technical testing 3 2015-09-01</p>
                    </Timeline.Item>
                    <Timeline.Item color="gray">
                      <p>Technical testing 1</p>
                      <p>Technical testing 2</p>
                      <p>Technical testing 3 2015-09-01</p>
                    </Timeline.Item>
                    <Timeline.Item color="gray">
                      <p>Technical testing 1</p>
                      <p>Technical testing 2</p>
                      <p>Technical testing 3 2015-09-01</p>
                    </Timeline.Item>
                  </Timeline>
                </Col>
              </Row>
            </div>
          </Content>
        </Layout>
        <Footer style={{ textAlign: "center" }}>
          Drawer with Handler Created By Teckieshare
        </Footer>
      </Layout>
    );
  }
}
export default App;
