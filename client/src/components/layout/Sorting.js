import React, { Fragment, useContext } from 'react';
import BookContext from '../../context/book/bookContext';

const Sorting = () => {
  const bookContext = useContext(BookContext);
  const { setSortingMethod } = bookContext;

  const handleClick = (e) => {
    setSortingMethod(e.target.value);
  };

  return (
    <Fragment>
      <button value="rating" onClick={handleClick}>
        <i className="far fa-star" /> Ocena
      </button>
      <button value="finished" onClick={handleClick}>
        <i className="fas fa-book" /> Nieprzeczytane
      </button>
      <button value="lastName" onClick={handleClick}>
        <i className="fas fa-pen-alt" /> Autor
      </button>
      <button value="pages" onClick={handleClick}>
        <i className="fas fa-ruler-horizontal" /> Długość
      </button>
    </Fragment>
  );
};

export default Sorting;
