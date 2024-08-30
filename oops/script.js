// Book class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    // Method to display book details
    displayDetails() {
        return `${this.title} by ${this.author} (ISBN: ${this.isbn})`;
    }
}

// Library class
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    // Method to add a book to the library
    addBook(book) {
        this.books.push(book);
        console.log(`Book added: ${book.title}`);
    }

    // Method to display all books in the library
    displayBooks() {
        console.log(`Books in ${this.name} Library:`);
        if (this.books.length === 0) {
            console.log("No books in the library.");
        } else {
            this.books.forEach((book, index) => {
                console.log(`${index + 1}. ${book.displayDetails()}`);
            });
        }
    }

    // Method to find a book by ISBN
    findBookByISBN(isbn) {
        const book = this.books.find(book => book.isbn === isbn);
        if (book) {
            return `Found: ${book.displayDetails()}`;
        } else {
            return "Book not found.";
        }
    }
}

// Example usage
const myLibrary = new Library("Central");

// Create new books
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "1234567890");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "0987654321");

// Add books to the library
myLibrary.addBook(book1);
myLibrary.addBook(book2);

// Display all books in the library
myLibrary.displayBooks();

// Find a book by ISBN
console.log(myLibrary.findBookByISBN("1234567890")); 
console.log(myLibrary.findBookByISBN("0000000000")); 