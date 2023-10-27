const myLibrary = []
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const submitButton = document.querySelector("dialog button");
const library = document.querySelector(".library")

const newTitle = document.getElementById('newTitle')
const newAuthor = document.getElementById('newAuthor')
const newPages = document.getElementById('newPages')
const readStatus = document.querySelector('input[type="radio"]:checked') 



// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
    dialog.showModal();
  });
  

 // "Submit" button closes the dialog
 submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    let newBook = new Book(newTitle.value, newPages.value, newAuthor.value, readStatus.value)
    addBookToLibrary(newBook)
    dialog.close()
  });


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages 
    this.read = read
}

function addBookToLibrary(Book) {
    // take user's input and store new book in array
    myLibrary.push(Book)
    // clear current display
    // display new array
    let card = document.createElement('div')
        card.classList.add('book')
        card.textContent = Book.title 
        library.appendChild(card)
}

// function displayBooks() {
//     myLibrary.forEach((book) => {       
//         let card = document.createElement('div')
//         card.classList.add('book')
//         card.textContent = book.title 
//         library.appendChild(card)
// })
// }


// dummy books
const GameofThrones = new Book("Game of Thrones", "George R. R. Martin", "468", "not read")
const LordofTheRings = new Book("Lord of The Rings", "John Ronald Reuel Tolkien", "602", "read")
const PrideandPrejudice = new Book("Pride and Prejudice", "Jane Austin", "400", "not read")

addBookToLibrary(GameofThrones)
addBookToLibrary(LordofTheRings)
addBookToLibrary(PrideandPrejudice)

// displayBooks()