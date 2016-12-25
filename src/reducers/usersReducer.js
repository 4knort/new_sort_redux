import * as types from 'constants/actionTypes';

const initialState = {
  active: {},
  initialList: [],
  modifiedList: [],
};

function nameComparator(a, b) {
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

    case types.SORT_ASC_NAME:
      return {
        ...state,
        initialList: state.initialList.slice(0).sort(nameComparator),
        modifiedList: state.modifiedList.slice(0).sort(nameComparator),
      };
    case types.SORT_DESC_NAME:
      return {
        ...state,
        initialList: state.initialList.slice(0).reverse(),
        modifiedList: state.modifiedList.slice(0).reverse(),
      };
    case types.SORT_ASC_AGE:
      return {
        ...state,
        initialList: state.initialList.slice(0).sort((a, b) => a.age - b.age),
        modifiedList: state.modifiedList.slice(0).sort((a, b) => a.age - b.age),
      };
    case types.SORT_DESC_AGE:
      return {
        ...state,
        initialList: state.initialList.slice(0).reverse(),
        modifiedList: state.modifiedList.slice(0).reverse(),
      };

    default: {
      return state;
    }
  }
}
