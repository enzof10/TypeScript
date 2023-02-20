interface Book {
    id?: number;
    title?: string;
    author?: string;
    isLoan?: (id: number) => void
}

const book: Book = {
    id: 1,
    title: "primero",
    isLoan(sd) {

    },
};

let books: Array<Book> = []


function getBok(): Book {
    return {
        id: 1,
        title: " book retornado",
        author: "author retornado"
    }
}

function createBook (book : Book) : Book{
    return book
}

const newBook : Book  = {...book}

console.log('createBook(newBook): ', createBook(newBook));