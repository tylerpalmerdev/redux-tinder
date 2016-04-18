import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

// this call consolidates all reducers into one application state
const rootReducer = combineReducers({
  books: BooksReducer, // val is whatever gets returned from BooksReducer fcn
  activeBook: ActiveBook
});

export default rootReducer;
