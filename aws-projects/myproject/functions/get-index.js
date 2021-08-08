'use strict';

const fs = require('fs');
const Mustache = require('mustache'); // Template library.
const axios = require('axios');

var html;

const getHtml = () => {
  if (html) return html;
  return new Promise((resolve, reject) => {
    fs.readFile('static/index.html', 'utf8', (err, data) => {
      if (err) reject(err);
      html = data;
      resolve(html);
    });
  });
};

const fetchBooks = () => axios.get(process.env.fetch_books_api);

module.exports.handler = async (event, context, callback) => {
  const htmlcontent = await getHtml();
  const books = await fetchBooks();

  const returnHtml = Mustache.render(htmlcontent, {
    books: books.data.Items,
    searchAPI: process.env.search_books_api,
  });
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
    },
    body: returnHtml,
  };
  callback(null, response);
};
