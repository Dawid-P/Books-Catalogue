import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import BookContext from '../../../context/book/bookContext';

const Details = () => {
  const bookContext = useContext(BookContext);
  const { currentBook, removeBook } = bookContext;
  if (currentBook) {
    const {
      firstName,
      lastName,
      title,
      type,
      pages,
      finished,
      rating,
      imgLink,
    } = currentBook;

    return (
      <div>
        <h3>Szczegóły</h3>
        <div className="bookDetails">
          <div className="bookInfo">
            <h2>{title}</h2>
            <p id="author">{`${firstName} ${lastName}`}</p>
            <p id="rating">
              Twoja ocena: <i className="fas fa-star" /> {rating}
            </p>
            <p id="pages">
              Liczba stron: <i className="fas fa-scroll" /> {pages}
            </p>
            <p id="type">
              Gatunek <i className="fas fa-dice-d20" /> {type}
            </p>
            <p id="finished">
              <i className="fas fa-book-open" />{' '}
              {finished ? `Przeczytana` : `Nieprzeczytana`}
            </p>

            <Link to="/edit">
              <button className="btn-details">Edytuj</button>
            </Link>
            <button className="btn-details" onClick={removeBook}>
              Usuń
            </button>
          </div>
          <img src={imgLink} alt="cover" className="cover" />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Szczegóły</h3>
        <p>Kliknij w okładkę aby wyświetlić szczegóły...</p>
      </div>
    );
  }
};

export default Details;
