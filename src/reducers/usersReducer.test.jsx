import test from 'tape-catch';
import usersReducer from './usersReducer';
import * as types from '../constants/actionTypes';

const initialState = {
  active: {},
  initialList: [],
  modifiedList: [],
  ascName: true,
  ascAge: true,
};

const testingArr = [{ name: 'john', age: '19' }, { name: 'alice', age: '18' }];

test('Users Reducer with uknown type', (t) => {
  t.deepEqual(usersReducer(undefined, {}), initialState, 'handles action with uknown type');

  

  // const actionSetActiveUser = { type: types.SET_ACTIVE_USER, payload: { some: 'any' } };
  // t.equal(JSON.stringify(usersReducer(initialState, actionSetActiveUser)), JSON.stringify({
  //   ...initialState,
  //   active: { some: 'any' },
  // }), 'handles action SetActiveUser');

  // const actionFindName = { type: types.FIND_NAME, payload: 'query' };
  // t.equal(JSON.stringify(usersReducer(initialState, actionFindName)), )
  t.end();
});

test('Users Reducer SetUsers', (t) => {
  const actionSetUsers = {
    type: types.SET_USERS,
    payload: testingArr,
  };

  t.deepEqual(usersReducer(initialState, actionSetUsers), {
    ...initialState,
    initialList: testingArr,
    modifiedList: testingArr,
    active: testingArr[0],
  }, 'handles action SetUsers');

  t.end();
});

test('Users Reducer FindUser', (t) => {
  const actionFindUsers = {
    type: types.FIND_NAME,
    payload: 'ali',
  };

  const modifiedState = {
    active: {},
    initialList: testingArr,
    modifiedList: testingArr,
    ascName: true,
    ascAge: true,
  };

  t.deepEqual(usersReducer(modifiedState, actionFindUsers), {
    ...modifiedState,
    modifiedList: [testingArr[1]],
    active: testingArr[1],
  }, 'handles action FindUsers');

  t.end();
});

test('Users Reducer SetActiveUser', (t) => {
  const actionSetActiveUser = {
    type: types.SET_ACTIVE_USER,
    payload: testingArr[1],
  };

  t.deepEqual(usersReducer(initialState, actionSetActiveUser), {
    ...initialState,
    active: testingArr[1],
  }, 'handles action SetActiveUser');

  t.end();
});

test('Users Reducer Sort Name asc', (t) => {
  const actionSortName = {
    type: types.SORT_NAME,
  };

  const modifiedState = {
    active: {},
    initialList: testingArr,
    modifiedList: testingArr,
    ascName: true,
    ascAge: true,
  };

  t.deepEqual(usersReducer(modifiedState, actionSortName), {
    ...modifiedState,
    initialList: testingArr.slice(0).reverse(),
    modifiedList: testingArr.slice(0).reverse(),
    ascName: false,
  }, 'handled sort name action asc');

  t.end();
});

test('Users Reducer Sort Name desc', (t) => {
  const actionSortName = {
    type: types.SORT_NAME,
  };

  const modifiedState = {
    active: {},
    initialList: testingArr.slice(0),
    modifiedList: testingArr.slice(0),
    ascName: false,
    ascAge: true,
  };

  t.deepEqual(usersReducer(modifiedState, actionSortName), {
    ...modifiedState,
    initialList: testingArr.slice(0),
    modifiedList: testingArr.slice(0),
    ascName: true,
  }, 'handled sort name action desc');

  t.end();
});
test('Users Reducer Sort Age asc', (t) => {
  const actionSortAge = {
    type: types.SORT_AGE,
  };

  const modifiedState = {
    active: {},
    initialList: testingArr,
    modifiedList: testingArr,
    ascName: true,
    ascAge: true,
  };

  t.deepEqual(usersReducer(modifiedState, actionSortAge), {
    ...modifiedState,
    initialList: testingArr.slice(0).reverse(),
    modifiedList: testingArr.slice(0).reverse(),
    ascAge: false,
  }, 'handled sort age action asc');

  t.end();
});

test('Users Reducer Sort Age desc', (t) => {
  const actionSortAge = {
    type: types.SORT_AGE,
  };

  const modifiedState = {
    active: {},
    initialList: testingArr,
    modifiedList: testingArr,
    ascName: true,
    ascAge: false,
  };

  t.deepEqual(usersReducer(modifiedState, actionSortAge), {
    ...modifiedState,
    initialList: testingArr,
    modifiedList: testingArr,
    ascAge: true,
  }, 'handled sort age action desc');

  t.end();
});
