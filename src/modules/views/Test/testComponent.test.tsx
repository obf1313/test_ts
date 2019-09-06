import React from 'react';
import { shallow } from 'enzyme';
import TestComponents from './';

it('应该有一个 Button', () => {
  const wrapper = shallow(<TestComponents />);
  expect(wrapper.find('Button').length).toBe(1);
});
