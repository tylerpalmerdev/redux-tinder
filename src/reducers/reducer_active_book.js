// state argument is not application state
// only the state that this reducer is responsible for
// when piece of state changes, it flows back into app state and updates
export default function(state = null, action) { // ES6 syntax for default
  // state can't be undefined, so set equal to null
  switch (action.type) {
  case 'BOOK_SELECTED': // we do care about this action
    return action.payload;
  default: // we don't care about this action
    return state;
  }
}
