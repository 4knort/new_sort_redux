import React from 'react';
import test from 'tape-catch';
import { shallow } from 'enzyme';
import SearchBar from '../SearchBar';

test('Component <SearchBar />', (t) => {
  const wrapper = shallow(<SearchBar />);

  t.equal(wrapper.length, 1, 'Renders without errors');

  t.end();
}); 
