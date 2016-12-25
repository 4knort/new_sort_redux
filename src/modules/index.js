import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import users from '../reducers/usersReducer';

export default combineReducers({ routing, users });
