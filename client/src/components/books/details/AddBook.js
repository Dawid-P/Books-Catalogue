import React, { useState, useContext } from 'react';
import BookContext from '../../../context/book/bookContext';

const AddBook = () => {
  const bookContext = useContext(BookContext);
  const { addBookToDB } = bookContext;

  let [newBook, setNewBook] = useState({
    firstName: '',
    lastName: '',
    title: '',
    type: '',
    pages: '',
    finished: false,
    rating: '',
    imgLink: '',
  });

  let {
    firstName,
    lastName,
    title,
    type,
    pages,
    finished,
    rating,
    imgLink,
  } = newBook;
  // e.target.checked ? (finished = true) : (finished = false);
  const onChange = (e) =>
    setNewBook({ ...newBook, [e.target.name]: e.target.value });

  const handleClick = (e) => {
    if (e.target.checked) {
      finished = true;
      document.getElementById('rating').removeAttribute('disabled');
    } else {
      finished = false;
      document.getElementById('rating').setAttribute('disabled', true);
    }
    setNewBook({ ...newBook, finished });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addBookToDB(newBook);
    setNewBook({
      firstName: '',
      lastName: '',
      title: '',
      type: '',
      pages: '',
      finished: false,
      rating: '',
      imgLink: '',
    });
  };

  return (
    <div>
      <form id="addbook" onSubmit={onSubmit}>
        <h3>Dodaj nową książkę</h3>
        <input
          type="text"
          placeholder="Tytuł"
          name="title"
          value={title}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Imię Autora"
          name="firstName"
          value={firstName}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Nazwisko Autora"
          name="lastName"
          value={lastName}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Gatunek"
          name="type"
          value={type}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Liczba stron"
          name="pages"
          value={pages}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Link do okładki"
          name="imgLink"
          value={imgLink}
          onChange={onChange}
        />
        <div className="input-container">
          <div>
            <label htmlFor="finished">
              Przeczytana:
              <input type="checkbox" id="finished" onClick={handleClick} />
            </label>
          </div>
        </div>
        <input
          id="rating"
          type="text"
          placeholder="Ocena"
          disabled
          name="rating"
          value={rating}
          onChange={onChange}
        />
        <div>
          <i className="fas fa-plus">
            <input type="submit" value="Dodaj" />
          </i>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
