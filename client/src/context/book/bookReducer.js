import {
  GET_BOOKS,
  BOOK_ERROR,
  CURRENT_BOOK,
  ADD_BOOK,
  REMOVE_BOOK,
  EDIT_BOOK,
  FILTER_BOOKS,
  CLEAR_FILTER,
  SET_SORTING_METHOD,
} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case ADD_BOOK:
      return {
        ...state,
        books: [action.payload, ...state.books],
      };
    case EDIT_BOOK:
      return {
        ...state,
        books: state.books.map((book) =>
          book._id === action.payload._id ? action.payload : book
        ),
        currentBook: action.payload.book,
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book._id !== action.payload),
        currentBook: null,
      };
    case BOOK_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CURRENT_BOOK:
      return {
        ...state,
        currentBook: action.payload,
      };
    case FILTER_BOOKS:
      return {
        ...state,
        filtered: state.books.filter((book) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return (
            book.title.match(regex) ||
            book.firstName.match(regex) ||
            book.lastName.match(regex)
          );
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case SET_SORTING_METHOD:
      return {
        ...state,
        sortingMethod: action.payload,
      };
    default:
      return state;
  }
};
