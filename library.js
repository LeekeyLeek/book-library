let myLibrary = [];
let bookList = document.getElementById('collection')

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
};

Book.prototype.toggleRead = function(bookRead){ 

    switch(this.read) {
        case true:
            bookRead.innerHTML = 'Unfinished';
            return this.read = false
        case false:
            bookRead.innerHTML = 'Finished';
            return this.read = true
    }

};

Book.prototype.deleteBook = function(bookContainer, newBook){
    
    bookList.removeChild(bookContainer)
    myLibrary.splice(newBook, 1)

};

function addBookToLibrary() {

    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value
    let read = document.getElementById('read').checked
    
    if(title === ''|| author === '' || pages === '' || read === '') {

        alert('Please complete all fields!')
        return;
    
    } else {

        let newBook = new Book(title, author, pages, read)
        myLibrary.push(newBook)
        console.log(myLibrary)

        function render() {

            let bookContainer = document.createElement('div')
            bookContainer.className += 'bookContainer';
            let bookDetails = document.createElement('div')
            bookDetails.className += 'bookDetails';

            bookList.appendChild(bookContainer)
            bookContainer.appendChild(bookDetails)
        
        
                let bookTitle = document.createElement('h4')
                    bookTitle.className += 'bookTitle';
                let bookAuthor = document.createElement('h4')
                    bookAuthor.className += 'bookAuthor';
                let bookPages = document.createElement('h4')
                    bookPages.className += 'bookPages';
                let bookRead = document.createElement('h4')
                    bookRead.className += 'bookRead';


                let dltButton = document.createElement('button')
                    dltButton.className += 'dltButton';
                    dltButton.innerHTML += 'Delete this book'
                    dltButton.addEventListener('click', function(e) {
                        newBook.deleteBook(bookContainer)
                    });

                let readButton = document.createElement('button')
                    readButton.className += 'readButton';
                    readButton.innerHTML += 'Change read status'
                    readButton.addEventListener('click', function(e) {
                        newBook.toggleRead(bookRead)
                    });
            
                bookDetails.appendChild(bookTitle)
                bookDetails.appendChild(bookAuthor)
                bookDetails.appendChild(bookPages)
                bookDetails.appendChild(bookRead)

                bookDetails.appendChild(readButton)
                bookDetails.appendChild(dltButton)
            
                bookTitle.innerHTML = newBook.title;
                bookAuthor.innerHTML = newBook.author;
                bookPages.innerHTML = `${newBook.pages} pages total`;
                if (newBook.read === true) {
                    bookRead.innerHTML = 'Finished';
                } else { 
                    bookRead.innerHTML = 'Unfinished';
                }
                
            
        };

        render()

    };
};

function displayForm() {
    let formDisplay = document.getElementById('formContainer')
    if (formDisplay.style.display === "none") {
        formDisplay.style.display = "block";
    } else { 
        formDisplay.style.display = "none";
    }
};