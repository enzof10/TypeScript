"use strict";
const book = {
    id: 1,
    title: "primero",
    isLoan(sd) {
    },
};
let books = [];
function getBok() {
    return {
        id: 1,
        title: " book retornado",
        author: "author retornado"
    };
}
function createBook(book) {
    return book;
}
const newBook = Object.assign({}, book);
console.log('createBook(newBook): ', createBook(newBook));
