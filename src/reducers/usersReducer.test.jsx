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

test('Users Reducer', (t) => {
  t.equal(usersReducer(initialState, {}), initialState, 'handles action with uknown type');

  const actionSetUsers = { type: types.SET_USERS, payload: [{ some: 'any' }, { some: 'another' }] };
  t.equal(JSON.stringify(usersReducer(initialState, actionSetUsers)), JSON.stringify({
    ...initialState,
    initialList: [{ some: 'any' }, { some: 'another' }],
    modifiedList: [{ some: 'any' }, { some: 'another' }],
    active: { some: 'any' },
  }), 'handles action SetUsers');
  t.end();
});
