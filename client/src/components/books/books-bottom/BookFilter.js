import React, { useRef, useContext, useEffect } from 'react';
import BookContext from '../../../context/book/bookContext';

const BookFilter = () => {
  const bookContext = useContext(BookContext);
  const text = useRef('');
  const { filterBooks, filtered, clearFilter } = bookContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterBooks(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        placeholder="Wyszukaj..."
        onChange={onChange}
        type="text"
      />
    </form>
  );
};

export default BookFilter;
