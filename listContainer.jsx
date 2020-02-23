import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { List, Card, Spin } from "antd";

const data = [
  {
    title: "Title 1"
  },
  {
    title: "Title 2"
  },
  {
    title: "Title 3"
  },
  {
    title: "Title 4"
  },
  {
    title: "Title 5"
  },
  {
    title: "Title 6"
  }
];

class ListContainer extends Component {
  state = {
    list: [
      {
        title: "Title 1"
      },
      {
        title: "Title 2"
      },
      {
        title: "Title 3"
      },
      {
        title: "Title 4"
      },
      {
        title: "Title 5"
      },
      {
        title: "Title 6"
      }
    ],
    loading: false,
    hasMore: true
  };

  loadFunc = () => {
    console.log('comes.....')
    alert()
    this.setState({
      loading: true
    });

    let newList = this.state.list.concat(...data);
    console.log(newList);

      this.setState({
        list: newList,
        loading: false
      })
  };
  render() {
    return (
      <InfiniteScroll
        pageStart={0}
        initialLoad={false}
        hasMore={false || !this.state.loading}
        loadMore={this.loadFunc}
        loader={<Spin size="large" />}
       
      >
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 1,
            lg: 1,
            xl: 1,
            xxl: 1
          }}
          dataSource={this.state.list}
          renderItem={item => (
            <List.Item>
              <Card title={item.title}>Card content</Card>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    );
  }
}

export default ListContainer;
