import React, { useState, useContext } from 'react';
import BookContext from '../../../context/book/bookContext';
import { useHistory } from 'react-router-dom';

const EditBook = () => {
  const bookContext = useContext(BookContext);
  const { currentBook, editBook } = bookContext;

  let [editedBook, setEditedBook] = useState({
    firstName: currentBook.firstName,
    lastName: currentBook.lastName,
    title: currentBook.title,
    type: currentBook.type,
    pages: currentBook.pages,
    finished: currentBook.finished,
    rating: currentBook.rating,
    imgLink: currentBook.imgLink,
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
  } = editedBook;

  const onChange = (e) =>
    setEditedBook({ ...editedBook, [e.target.name]: e.target.value });

  const handleClick = (e) => {
    if (e.target.checked) {
      finished = true;
      document.getElementById('rating').removeAttribute('disabled');
    } else {
      finished = false;
      document.getElementById('rating').setAttribute('disabled', true);
    }
    setEditedBook({ ...editedBook, finished });
  };

  let history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    editBook(editedBook);
    history.push('/');
  };

  return (
    <div>
      <form id="addbook" onSubmit={onSubmit}>
        <h3>Edytuj: </h3>
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
          <i className="far fa-save">
            <input type="submit" value="Zapisz" />
          </i>
        </div>
      </form>
    </div>
  );
};

export default EditBook;
