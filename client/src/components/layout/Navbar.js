import React from 'react';
import PropTypes from 'prop-types';
import library from '../../static/images/library.png';
import { Link } from 'react-router-dom';
import BookFilter from '../books/books-bottom/BookFilter';

const Navbar = ({ title, image }) => {
  return (
    <nav>
      <h1>
        <img src={library} alt="logo" />
        {title}
      </h1>
      <div>
        <BookFilter />
        <button>
          <Link to="/nowa">Dodaj książkę</Link>
        </button>
        <button>Moje konto</button>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'Moja Biblioteka',
};

export default Navbar;
