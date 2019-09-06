import React from 'react';
import { shallow } from 'enzyme';
import TestComponents from './';

it('should has Button', () => {
  const wrapper = shallow(<TestComponents />);
  expect(wrapper.find('Button').length).toBe(1);
});