const express = require('express');
const router = express.Router();

const Book = require('../models/Book');

// @route   GET api/books
// @desc    Get all books
// @access  Public
router.get('/', async (req, res) => {
  try {
    const books = await Book.find().sort({
      date: -1,
    });
    res.json(books);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/books/:id
// @desc    Get single book
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    let book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ msg: 'Book not found' });
    res.json({ book });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/books
// @desc    Add book
// @access  Public
router.post('/', async (req, res) => {
  const {
    firstName,
    lastName,
    title,
    type,
    pages,
    finished,
    rating,
    imgLink,
  } = req.body;

  try {
    const newBook = new Book({
      firstName,
      lastName,
      title,
      type,
      pages,
      finished,
      rating,
      imgLink,
    });
    const book = await newBook.save();
    res.json(book);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/books/:id
// @desc    Update book
// @access  Public
router.put('/:id', async (req, res) => {
  const {
    firstName,
    lastName,
    title,
    type,
    pages,
    finished,
    rating,
    imgLink,
  } = req.body;

  // Build book object
  const bookFields = {};
  if (firstName) bookFields.firstName = firstName;
  if (lastName) bookFields.lastName = lastName;
  if (title) bookFields.title = title;
  if (type) bookFields.type = type;
  if (pages) bookFields.pages = pages;
  if (finished) bookFields.finished = finished;
  if (rating) bookFields.rating = rating;
  if (imgLink) bookFields.imgLink = imgLink;

  try {
    let book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ msg: 'Book not found' });

    book = await Book.findByIdAndUpdate(
      req.params.id,
      { $set: bookFields },
      { new: true }
    );
    res.json({ book });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/books/:id
// @desc    Delete book
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    let book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ msg: 'Book not found' });
    await Book.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Book removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
