let myLibrary = [];
let liveLibrary = document.getElementById('library')
let bookList = document.getElementById('collection')

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
};

function addBookToLibrary() {

    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value
    let read = document.getElementById('read').checked
    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
    console.log(myLibrary)

    function render() {

        let newItem = document.createElement('div')
        newItem.classList.add = 'books';
        bookList.appendChild(newItem)
        
    
        for (let [key, value] of Object.entries(newBook)) {
            console.log(`${key}: ${value}`);
            newItem.innerHTML += `${key}: ${value}`
        };
    
    };

    render()

};

function displayForm() {
    let formDisplay = document.getElementById('formContainer')
    if (formDisplay.style.display === "none") {
        formDisplay.style.display = "block";
    } else { 
        formDisplay.style.display = "none";
    }
};