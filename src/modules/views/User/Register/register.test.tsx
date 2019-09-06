/**
 * @description: 注册测试
 * @author: cnn
 * @createTime: 2019/9/6 14:02
 **/
import React from 'react';
import { shallow, mount } from 'enzyme';
// import Register from './';

describe('test views/User/Register', () => {
  it('注册测试', () => {
    const p = new Promise((resolve) => {
      request('localhost:8082:messageBox/user/register/', (err: any, res: any, body: any) => {
        resolve(res);
      });
    });
    return p.then((res) => {
      expect(res.statusCode).toBe(200);
    });
  });
});
