const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  pages: {
    type: String,
  },
  rating: {
    type: String,
  },
  finished: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'Powieść',
  },
  date: {
    type: Date,
    default: Date.now,
  },
  imgLink: {
    type: String,
    default:
      'https://static01.helion.com.pl/global/okladki/326x466/3d31fe00ae570b756ccefb3238c676c6,rerew2.jpg',
  },
});

module.exports = mongoose.model('book', BookSchema);
