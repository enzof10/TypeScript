var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var book = {
    id: 1,
    title: "primero",
    isLoan: function (sd) {
    }
};
var books = [];
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
var newBook = __assign({}, book);
console.log('createBook(newBook): ', createBook(newBook));
