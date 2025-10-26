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

displayBooks();

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

function displayBooks() {
    // Add multiple colors for the books
    const bookColors = [
      '#fa4f4e', '#f6cc32', '#027f82',
      '#f2f2f2', '#67d7f7', '#526a87',
      '#2e4139'
    ];

    const containerElement = document.getElementById('container');
    // Loop through the array of books and create a card element for
    // each book.
    myLibrary.forEach((book) => {
        // Get random color for book.
        let colorIndex = getRandomInt(0, 7);

        let cardElement = document.createElement('div');
        // Add a class name of card to each card element.
        cardElement.className = "card";
        // Add an ID atribute to the card element.
        cardElement.id = book.id;
        // Set the book color
        cardElement.style.backgroundColor = bookColors[colorIndex];

        if (colorIndex == 6) {
          // Change the font color to white so it is readable.
          cardElement.style.color = '#f1f0f0ff';
        }
        // Add child nodes to the card element
        cardElement.innerHTML = `
        <h2 class="title">${book.title}</h2>
        <p class="author">By: <strong>${book.author}</strong></p>
        <p class="pages">${book.pages}</p>
        `;
        containerElement.appendChild(cardElement);
    });
};

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
};