import * as React from 'react';
import { Button } from 'antd';

interface IProps {
}

interface IState {
  userName: string,
  password: string
}

class TestComponents extends React.Component<IProps, IState> {
  render() {
    return (
      <Button>啦啦啦</Button>
    );
  }
}

export default TestComponents;