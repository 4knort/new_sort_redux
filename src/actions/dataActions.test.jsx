import test from 'tape-catch';
import * as dataActions from './dataActions';
import * as types from '../constants/actionTypes';

test('setActiveUserAction testing', (t) => {
  const setActiveUserAction = dataActions.setActiveUser({});
  t.equal(setActiveUserAction.type, types.SET_ACTIVE_USER, 'correct type of setActiveUser action');
  t.equal(typeof setActiveUserAction.payload, 'object', 'correct typeof of setActiveUser action payload');

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
  const setUsersAction = dataActions.setUsers([]);
  t.equal(setUsersAction.type, types.SET_USERS, 'correct type of setUsersAction action');
  t.equal(typeof setUsersAction.payload, 'object', 'correct payload of findNameAction action');

  t.end();
});

test('findNameAction testing', (t) => {
  const findNameAction = dataActions.findName('query');
  t.equal(findNameAction.type, types.FIND_NAME, 'correct type of findNameAction action');
  t.equal(findNameAction.payload, 'query', 'correct payload of findNameAction action');

  t.end();
});
