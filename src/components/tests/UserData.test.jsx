import React from 'react';
import test from 'tape-catch';
import { shallow } from 'enzyme';
import UserData from '../UserData';

test('Component <UserData />', (t) => {
  const wrapper = shallow(<UserData item= {{ avatar: 'cat' }} />);

  t.equal(wrapper.length, 1, 'Renders without errors');

  t.end();
}); 
