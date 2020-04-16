import React, { useContext, useEffect, useState } from 'react';
import BookContext from '../../../context/book/bookContext';
import BookItemBottom from './BookItemBottom';
import Pagination from '../../layout/Pagination';

const BooksBottom = () => {
  const bookContext = useContext(BookContext);
  const { books, getBooks, filtered, sortingMethod } = bookContext;
  useEffect(() => {
    getBooks();
    // eslint-disable-next-line
  }, []);

  // Sort books before outputing
  let sorted = [].concat(books).sort(compareValues(sortingMethod));

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(8);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;

  let totalBooks = 0;
  let currentBooks = 0;

  if (sorted) {
    currentBooks = sorted.slice(indexOfFirstBook, indexOfLastBook);
    totalBooks = sorted.length;
  }
  // End of Pagination

  return (
    <div id="bottom-books">
      <div>
        <h3>Twoje książki</h3>
        <div className="book-wraper">
          {filtered !== null
            ? filtered.map((book) => (
                <BookItemBottom key={book._id} book={book} />
              ))
            : books &&
              currentBooks.map((book) => (
                <BookItemBottom key={book._id} book={book} />
              ))}{' '}
        </div>
        <Pagination
          totalBooks={totalBooks}
          booksPerPage={booksPerPage}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default BooksBottom;

function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === 'desc' ? comparison * -1 : comparison;
  };
}
