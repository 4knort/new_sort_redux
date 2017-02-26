import React from 'react';
import test from 'tape-catch';
import { shallow } from 'enzyme';
import Header from '../Header';

test('Component <Header />', (t) => {
  const wrapper = shallow(<Header />);

  t.equal(wrapper.length, 1, 'Renders without errors');

  t.end();
}); 
