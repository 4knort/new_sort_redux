import React from 'react';
import test from 'tape-catch';
import { shallow } from 'enzyme';
import { UserList } from '../UserList';

test('Component <UserList  />', (t) => {
  const wrapper = shallow(<UserList users={[]} />);

  t.equal(wrapper.length, 1, 'Renders without errors');

  t.end();
});
