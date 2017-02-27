import test from 'tape-catch';
import * as dataActions from './dataActions';
import * as types from '../constants/actionTypes';

test('setActiveUserAction testing', (t) => {
  const obj = {
    name: 'john',
    age: '18',
  };
  const expectedAction = {
    type: types.SET_ACTIVE_USER,
    payload: obj,
  };

  t.deepEqual(dataActions.setActiveUser(obj), expectedAction, 'correct action returned');

  t.end();
});

test('sortNameAction testing', (t) => {
  const sortNameAction = dataActions.sortName();
  t.equal(sortNameAction.type, types.SORT_NAME, 'correct type of sortNameAction action');

  t.end();
});

test('sortAgeAction testing', (t) => {
  const sortAgeAction = dataActions.sortAge();
  t.equal(sortAgeAction.type, types.SORT_AGE, 'correct type of sortAgeAction action');

  t.end();
});

test('setUsersAction testing', (t) => {
  const arr = [{
    name: 'john',
    age: '18',
  },
  {
    name: 'alice',
    age: '19',
  }];
  const expectedAction = {
    type: types.SET_USERS,
    payload: arr,
  };

  t.deepEqual(dataActions.setUsers(arr), expectedAction, 'correct action returned');

  t.end();
});

test('findNameAction testing', (t) => {
  const query = 'query';
  const expectedAction = {
    type: types.FIND_NAME,
    payload: query,
  };

  t.deepEqual(dataActions.findName(query), expectedAction, 'correct action returned');
  
  t.end();
});
