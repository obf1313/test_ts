import * as React from 'react';
import { Button, Input } from 'antd';
import { Link } from 'react-router-dom';
import Row from 'antd/lib/grid/row';

interface IProps {
  color: string,
  // 可选参数
  size?: string
}

interface IState {
  count: number,
  firstName: string,
  lastName: string
}

class Home extends React.Component<IProps, IState> {
  public readonly state: Readonly<IState> = {
    count: 1,
    firstName: '哆啦',
    lastName: 'A梦'
  };

  public componentDidMount(): void {
    let count: number = 5;
    this.setState({
      count
    });
  }

  private buildName = (firstName: string, lastName?: string) => {
    if (lastName) return firstName + lastName;
    else return firstName;
  };

  public render(): React.ReactNode {
    const { firstName, lastName, count } = this.state;
    let fullName: string = this.buildName(firstName, lastName);
    return (
      <Row>
        <Link to="/User">
          <Button>{fullName + ':' + count}</Button>
        </Link>
        <Input placeholder="45364" />
        <div>45646</div>
      </Row>
    );
  }
}

export default Home;
