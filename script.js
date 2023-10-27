const myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages 
    this.read = read
}

function addBookToLibrary(Book) {
    // take user's input and store new book in array
    myLibrary.push(Book)
    // update display
}

function displayBooks() {
    let library = document.querySelector(".library")
    myLibrary.forEach((book) => {       
        let card = document.createElement('div')
        card.textContent = book.title 
        library.appendChild(card)
})
}

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

// dummy books
const GameofThrones = new Book("Game of Thrones", "George R. R. Martin", "468", "not read")
const LordofTheRings = new Book("Lord of The Rings", "John Ronald Reuel Tolkien", "602", "read")
const PrideandPrejudice = new Book("Pride and Prejudice", "Jane Austin", "400", "not read")

addBookToLibrary(GameofThrones)
addBookToLibrary(LordofTheRings)
addBookToLibrary(PrideandPrejudice)

console.log(myLibrary)
displayBooks()