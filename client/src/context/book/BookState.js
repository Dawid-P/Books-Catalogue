import React, { useReducer } from 'react';
import BookContext from './bookContext';
import bookReducer from './bookReducer';
import axios from 'axios';
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

const BookState = (props) => {
  const initialState = {
    books: null,
    currentBook: null,
    filtered: null,
    sortingMethod: null,
  };

  const [state, dispatch] = useReducer(bookReducer, initialState);

  // Get Contacts
  const getBooks = async () => {
    try {
      const res = await axios.get('/api/books');
      console.log('getting data from API');
      dispatch({ type: GET_BOOKS, payload: res.data });
    } catch (err) {
      dispatch({ type: BOOK_ERROR, payload: null });
    }
  };

  // Clicked book details
  const getCurrentBookDetails = async (book) => {
    dispatch({ type: CURRENT_BOOK, payload: book });
  };

  // Add new book to DB
  const addBookToDB = async (newBook) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/api/books', newBook, config);
      dispatch({ type: ADD_BOOK, payload: res.data });
    } catch (err) {
      dispatch({ type: BOOK_ERROR, payload: null });
    }
  };
  // Edit book
  const editBook = async (edited) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      let id = state.currentBook._id;
      const res = await axios.put(`/api/books/${id}`, edited, config);
      dispatch({ type: EDIT_BOOK, payload: res.data });
    } catch (err) {
      dispatch({ type: BOOK_ERROR, payload: null });
    }
    getBooks();
  };
  // Remove book
  const removeBook = async () => {
    try {
      let id = state.currentBook._id;
      await axios.delete(`/api/books/${id}`);
      dispatch({ type: REMOVE_BOOK, payload: id });
    } catch (err) {
      dispatch({ type: BOOK_ERROR, payload: null });
    }
  };

  // Filter books
  const filterBooks = (text) => {
    dispatch({ type: FILTER_BOOKS, payload: text });
  };

  // Clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  // Set sorting method
  const setSortingMethod = (sortingMethod) => {
    dispatch({ type: SET_SORTING_METHOD, payload: sortingMethod });
  };

  return (
    <BookContext.Provider
      value={{
        books: state.books,
        currentBook: state.currentBook,
        filtered: state.filtered,
        sortingMethod: state.sortingMethod,
        setSortingMethod,
        getBooks,
        getCurrentBookDetails,
        addBookToDB,
        removeBook,
        editBook,
        filterBooks,
        clearFilter,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookState;
