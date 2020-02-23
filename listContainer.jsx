import React,{Component} from 'react';
import InfiniteScroll from 'react-infinite-scroller'; 
import {List ,Card,Spin} from "antd";

class ListContainer extends Component{

render(){

  const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];

return (<InfiniteScroll
    pageStart={0}
    loadMore={loadFunc}
    hasMore={true || false}
    loader={ <Spin size="large" />}
>
  <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 1,
      lg: 1,
      xl: 1,
      xxl: 1,
    }}
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <Card title={item.title}>Card content</Card>
      </List.Item>
    )}
  />
</InfiniteScroll>)
}
}

export default ListContainer;