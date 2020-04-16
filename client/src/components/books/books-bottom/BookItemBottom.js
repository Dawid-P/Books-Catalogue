import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import BookContext from '../../../context/book/bookContext';
import { Link } from 'react-router-dom';

const BookItemBottom = ({ book }) => {
  const bookContext = useContext(BookContext);
  const { getCurrentBookDetails } = bookContext;
  const { firstName, lastName, title, rating, imgLink, finished } = book;

  return (
    <Link to="/">
      <div
        onClick={() => {
          getCurrentBookDetails(book);
        }}
        className="book"
      >
        <img src={imgLink} alt="cover" className="cover" />
        <h3>{title}</h3>
        <p>{`${firstName} ${lastName}`}</p>
        <small>
          <i className="fas fa-star" />{' '}
          {finished
            ? rating !== ''
              ? rating
              : 'Brak oceny'
            : 'Nieprzeczytana'}
        </small>
      </div>
    </Link>
  );
};

BookItemBottom.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookItemBottom;
