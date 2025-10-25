// Holds all the Book objects.
const myLibrary = [
    { 
    "id": "001",
    "author": "Chinua Achebe",
    "pages": 209,
    "title": "Things Fall Apart",
  },
  {
    "id": "002",
    "author": "Hans Christian Andersen",
    "pages": 784,
    "title": "Fairy tales",
  },
  {
    "id": "003",
    "author": "Dante Alighieri",
    "pages": 928,
    "title": "The Divine Comedy",
  },
  {
    "id": "004",
    "author": "Unknown",
    "pages": 160,
    "title": "The Epic Of Gilgamesh",
  },
  {
    "id": "005",
    "author": "Unknown",
    "pages": 176,
    "title": "The Book Of Job",
  },
  {
    "id": "006",
    "author": "Unknown",
    "pages": 288,
    "title": "One Thousand and One Nights",
  },
  {
    "id": "007",
    "author": "Unknown",
    "pages": 384,
    "title": "Nj\u00e1l's Saga",
  },
  {
    "id": "008",
    "author": "Jane Austen",
    "pages": 226,
    "title": "Pride and Prejudice",
  },
  {
    "id": "009",
    "author": "Honor\u00e9 de Balzac",
    "pages": 443,
    "title": "Le P\u00e8re Goriot",
  },
];

addBookToLibrary("The Hobbit", "T.K. Robinson", 694, true);

console.log(myLibrary);

// Create the Book constructor.
function Book(title, author, pages, read=false) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    // Create a new Book object.
    const newBook = new Book(title, author, pages, read);

    // Add the book to the library
    myLibrary.push(newBook);
}

