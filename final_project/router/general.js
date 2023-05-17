const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


    public_users.get('/books',function (req, res) {

    const get_books = new Promise((resolve, reject) => {
        resolve(res.send(JSON.stringify({books}, null, 4)));
      });

      get_books.then(() => console.log("Promise for 10th Task is resolved"));

  });

// Get the book list available in the shop
public_users.get('/', function (req, res) {
    res.send(JSON.stringify(books, null, 4));
});


public_users.get('/books/isbn/:isbn',function (req, res) {
    const isbn = req.params.isbn;
    let books_isbn = books[isbn];
    const get_books_isbn = new Promise((resolve, reject) => {
        resolve(res.send(JSON.stringify({books_isbn}, null, 4)));
      });

      get_books_isbn.then(() => console.log("Promise for 11th Task is resolved"));

  });



// Get book details based on ISBN
public_users.get('/isbn/:isbn', function (req, res) {
    const isbn = req.params.isbn;
    res.send(books[isbn]);
});

// Get book details based on author
public_users.get('/books/author/:author',function (req, res) {
    const author = req.params.author;
    let isbnArr = Object.keys(books);
    let filtered_books = isbnArr.filter(isbnarr => books[isbnarr].author === author);
    const get_books_author = new Promise((resolve, reject) => {
        resolve(res.send(books[filtered_books]));
      });

      get_books_author.then(() => console.log("Promise for 12th Task is resolved"));

  });


public_users.get('/author/:author', function (req, res) {
    const author = req.params.author;
    let isbnArr = Object.keys(books);
    let filtered_books = isbnArr.filter(isbnarr => books[isbnarr].author === author);
    res.send(books[filtered_books]);
});

// Get all books based on title

public_users.get('/books/title/:title',function (req, res) {
    const title = req.params.title;
    let isbnArr = Object.keys(books);
    let filtered_books = isbnArr.filter(isbnarr => books[isbnarr].title === title);
    const get_books_title = new Promise((resolve, reject) => {
        resolve(res.send(books[filtered_books]));
      });

      get_books_title.then(() => console.log("Promise for 13th Task is resolved"));

  });


public_users.get('/title/:title', function (req, res) {
    const title = req.params.title;
    let isbnArr = Object.keys(books);
    let filtered_books = isbnArr.filter(isbnarr => books[isbnarr].title === title);
    res.send(books[filtered_books]);
});

//  Get book review
public_users.get('/review/:isbn', function (req, res) {
    const isbn = req.params.isbn;
    res.send(books[isbn].reviews);
});

module.exports.general = public_users;
