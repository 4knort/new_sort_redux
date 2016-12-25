import axios from 'axios';
import * as types from 'constants/actionTypes';

function setUsers(data) {
  return {
    type: types.SET_USERS,
    payload: data,
  };
}

export function fetchUsers() {
  return function thunkFetch(dispatch) {
    axios.get('/data.json').then(response => {
      dispatch(setUsers(response.data));
    });
  };
}

export function setActiveUser(user) {
  return {
    type: types.SET_ACTIVE_USER,
    payload: user,
  };
}

export function sortNameAsc() {
  return {
    type: types.SORT_ASC_NAME,
  };
}

export function sortNameDesc() {
  return {
    type: types.SORT_DESC_NAME,
  };
}

export function sortAgeAsc() {
  return {
    type: types.SORT_ASC_AGE,
  };
}

export function sortAgeDesc() {
  return {
    type: types.SORT_DESC_AGE,
  };
}

export function findName(query) {
  return {
    type: types.FIND_NAME,
    payload: query,
  };
}
