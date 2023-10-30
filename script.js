const myLibrary = []
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const submitButton = document.querySelector("dialog button");
const library = document.querySelector(".library")
let bookCount = 0

const newTitle = document.getElementById('newTitle')
const newAuthor = document.getElementById('newAuthor')
const newPages = document.getElementById('newPages')




// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
    dialog.showModal();
  });
  

 // "Submit" button closes the dialog
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    let readStatus = document.querySelector('input[name="readStatus"]:checked').value; 
    let newBook = new Book(newTitle.value, newAuthor.value, newPages.value, readStatus)
    addBookToLibrary(newBook)
    dialog.close()
    
    // update remove buttons NodeList
    
  });

  // Remove book when user clicks X
document.addEventListener("click", (e) => {
    // if user clicks on X/remove
    if (e.target.textContent == "X") {
    // if e.target = 
    let arrayNum = e.target.parentNode
    // if has data attribute bookNumber
    if (arrayNum.getAttribute('bookNumber')) {
        // remove from array
        myLibrary.splice(arrayNum.getAttribute('bookNumber'), 1)
        // remove from DOM tree
        e.target.parentNode.parentNode.removeChild(e.target.parentNode) // https://plainjs.com/javascript/manipulation/removing-an-element-33/
    }
}})

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages 
    this.read = read
}

// Book.prototype.changeReadStatus = function () {
//     //if "not read" is clicked
//     if (document.addEventListener('click', (e))) {
//         console.log(e)
//     }
//     // change not read to read in this.read
//     // update not read to read on card display
// }

function addBookToLibrary(Book) {
    // push book into myLibrary array
    myLibrary.push(Book)
    // create new card for current book
    let card = document.createElement('div')
    // keep track of number of books and add title to card
        card.setAttribute("bookNumber", bookCount)
        bookCount = bookCount + 1
        card.textContent = Book.title
        library.appendChild(card)

    // show author on card
    let author = document.createElement('div')
    author.textContent = Book.author
    card.appendChild(author)

    // show read status on card
    let readStatus = document.createElement('div')
    readStatus.textContent = document.querySelector('input[name="readStatus"]:checked').value
    card.appendChild(readStatus)

    let remove = document.createElement('button')
        remove.classList.add('remove')
        remove.textContent = "X"
        card.appendChild(remove) 
}




// dummy books
// const GameofThrones = new Book("Game of Thrones", "George R. R. Martin", "468", "not read")
// const LordofTheRings = new Book("Lord of The Rings", "John Ronald Reuel Tolkien", "602", "read")
// const PrideandPrejudice = new Book("Pride and Prejudice", "Jane Austin", "400", "not read")

// addBookToLibrary(GameofThrones)
// addBookToLibrary(LordofTheRings)
// addBookToLibrary(PrideandPrejudice)