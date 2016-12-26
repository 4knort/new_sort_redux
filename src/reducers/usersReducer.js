import * as types from 'constants/actionTypes';

const initialState = {
  active: {},
  initialList: [],
  modifiedList: [],
  ascName: true,
  ascAge: true,
};

function nameComparatorUp(a, b) {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
}

function nameComparatorDown(a, b) {
  return -nameComparatorUp(a, b)
}

function sortSearch(items, query) {
  return items.filter((item) => item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
}

export default function users(state = initialState, action) {
  switch (action.type) {
    case types.SET_USERS: {
      return {
        ...state,
        initialList: [...action.payload],
        modifiedList: [...action.payload],
        active: action.payload[0],
      };
    }
    case types.SET_ACTIVE_USER: {
      return {
        ...state,
        active: action.payload,
      };
    }

    case types.FIND_NAME: {
      return {
        ...state,
        modifiedList: sortSearch(state.initialList, action.payload),
        active: sortSearch(state.initialList, action.payload)[0],
      };
    }

    case types.SORT_NAME:
    if(state.ascName === true) {
      return {
        ...state,
        initialList: state.initialList.slice(0).sort(nameComparatorUp),
        modifiedList: state.modifiedList.slice(0).sort(nameComparatorUp),
        ascName: false,
      };
    } else {
      return {
        ...state,
        initialList: state.initialList.slice(0).sort(nameComparatorDown),
        modifiedList: state.modifiedList.slice(0).sort(nameComparatorDown),
        ascName: true,
      };
    }
      
    case types.SORT_AGE:
    if(state.ascAge === true) {
      return {
        ...state,
        initialList: state.initialList.slice(0).sort((a, b) => a.age - b.age),
        modifiedList: state.modifiedList.slice(0).sort((a, b) => a.age - b.age),
        ascAge: false,
      };
    } else {
      return {
        ...state,
        initialList: state.initialList.slice(0).sort((a, b) => b.age - a.age),
        modifiedList: state.modifiedList.slice(0).sort((a, b) => b.age - a.age),
        ascAge: true,
      };
    }
      

    default: {
      return state;
    }
  }
}
