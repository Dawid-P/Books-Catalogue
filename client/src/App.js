import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Aside from './components/layout/Aside';
import BookState from './context/book/BookState';
import BooksBottom from './components/books/books-bottom/BooksBottom';
import Details from './components/books/details/Details';
import AddBook from './components/books/details/AddBook';
import EditBook from './components/books/details/EditBook';

export default function App() {
  return (
    <BookState>
      <Router>
        <main>
          <Aside />
          <div>
            <Navbar />
            <section id="books">
              <BooksBottom />
              <Switch>
                <Route exact path="/" component={Details} />
                <Route exact path="/nowa" component={AddBook} />
                <Route exact path="/edit" component={EditBook} />
              </Switch>
            </section>
          </div>
        </main>
      </Router>
    </BookState>
  );
}
