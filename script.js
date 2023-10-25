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
        // create new div DOM element
        let card = document.createElement('div')
        
        // fill new element with book title 
        card.textContent = book.title
        console.log(card.textContent)
        console.log(card)
        // fill new element with read/not read button
        // append book to library library.appendChild(variable of current book)
        library.appendChild(card)
})
}

// dummy books
const GameofThrones = new Book("Game of Thrones", "George R. R. Martin", "468", "not read")
const LordofTheRings = new Book("Lord of The Rings", "John Ronald Reuel Tolkien", "602", "read")
const PrideandPrejudice = new Book("Pride and Prejudice", "Jane Austin", "400", "not read")

addBookToLibrary(GameofThrones)
addBookToLibrary(LordofTheRings)
addBookToLibrary(PrideandPrejudice)

console.log(myLibrary)
displayBooks()