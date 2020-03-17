let myLibrary = [];
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
    if(title === ''|| author === '' || pages === '' || readStatus === '') {

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
            bookDetails.className += 'bookInfo';

            bookList.appendChild(bookContainer)
            bookContainer.appendChild(bookDetails)


            function bookElements() {
                let bookTitle = document.createElement('h4')
                    bookTitle.className += 'bookTitle';
                let bookAuthor = document.createElement('h5')
                    bookAuthor.className += 'bookAuthor';

                bookDetails.appendChild(bookTitle)
                    bookDetails.appendChild('br')
                bookDetails.appendChild(bookAuthor)
                    bookDetails.appendChild('br')

                bookTitle.innerHTML = title;
                bookAuthor.innerHTML = author;
            
            };
        
            //Might have to send key/values to diff divs in this loop
            for (let [key, value] of Object.entries(newBook)) {
                console.log(`${key}: ${value}`);
                bookDetails.innerHTML += `${key}: ${value}`
            
            };
    
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