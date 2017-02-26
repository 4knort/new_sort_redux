import React from 'react';
import test from 'tape-catch';
import { shallow } from 'enzyme';
import ActiveUser from '../ActiveUser';

test('Component <ActiveUser />', (t) => {
  const wrapper = shallow(<ActiveUser />);

  t.equal(wrapper.length, 1, 'Renders without errors');

  t.end();
}); 
