const myLibrary = []
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const submitButton = document.querySelector("dialog button");
const library = document.querySelector(".library")

const newTitle = document.getElementById('newTitle')
const newAuthor = document.getElementById('newAuthor')
const newPages = document.getElementById('newPages')


// function Book(title, author, pages, read) {
//     this.title = title
//     this.author = author
//     this.pages = pages 
//     this.read = read
// }

class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages 
        this.read = read
    }
}


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
    
  });

//   // Remove book when user clicks X
document.addEventListener("click", (e) => {
    // if user clicks on X/remove
    if (e.target.textContent == "X") {
    // remove from array (array book title needs to match DOM book title)
    let index = myLibrary.findIndex(item => item.title == e.target.parentNode.firstChild.textContent)
    myLibrary.splice(index, 1)
    // remove from DOM tree: go to parent node and remove child from there
    e.target.parentNode.parentNode.removeChild(e.target.parentNode) // https://plainjs.com/javascript/manipulation/removing-an-element-33/
    console.log(myLibrary)
}})

// change read status when user clicks "not read"
document.addEventListener('click', (e) => {
    // if "not read" is clicked
    if (e.target.textContent == "not Read") {
        // locate book in array and change read status
        let bookObject = myLibrary.find(book => book.title == e.target.parentNode.firstChild.textContent)
        console.log(bookObject)
        bookObject.changeReadStatus() 

        // change read status in DOM
        e.target.textContent = "read"
    }
})

Book.prototype.changeReadStatus = function () {
    this.read = "read"

    }



function addBookToLibrary(Book) {
    // push book into myLibrary array
    
    myLibrary.push(Book)
    let card = document.createElement('div')
    card.classList.add('card')
    library.appendChild(card)

    let title = document.createElement('div')
    title.textContent = Book.title
    title.classList.add('bookTitle')
    card.appendChild(title)

     

    // show author on card
    let author = document.createElement('div')
    author.textContent = Book.author
    card.appendChild(author)

    // show read status on card
    let readStatus = document.createElement('button')
    readStatus.classList.add('readDisplay')
    readStatus.textContent = document.querySelector('input[name="readStatus"]:checked').value
    card.appendChild(readStatus)

    let remove = document.createElement('button')
        remove.classList.add('remove')
        remove.textContent = "X"
        card.appendChild(remove) 

    console.log(myLibrary)
}

