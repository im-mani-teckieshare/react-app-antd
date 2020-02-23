import React,{Component} from 'react';
import InfiniteScroll from 'react-infinite-scroller'; 
import {List ,Card} from "antd";

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
    hasMore={false}
    loader={<div className="loader" key={0}>Loading ...</div>}
>
  <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 24,
      xl: 6,
      xxl: 3,
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