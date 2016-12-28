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

export function sortName() {
  return {
    type: types.SORT_NAME,
  };
}


export function sortAge() {
  return {
    type: types.SORT_AGE,
  };
}

export function setDirection(direction, directionType) {
  return {
    type: types.SET_DIRECTION,
    payload: direction,
    directionType: directionType,
  };
}

export function findName(query) {
  return {
    type: types.FIND_NAME,
    payload: query,
  };
}
