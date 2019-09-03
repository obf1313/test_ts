/**
 * @description 首页
 * @author cnn
 * **/
import * as React from 'react';
import { Row } from 'antd';

interface IProps {
}

interface IState {
}

class Home extends React.Component<IProps, IState> {
  public readonly state: Readonly<IState> = {
  };

  public render(): React.ReactNode {
    return (
      <Row style={{ width: 500, margin: 20 }}>首页</Row>
    );
  }
}

export default Home;