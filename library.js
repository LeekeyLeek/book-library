let myLibrary = [];
const liveLibrary = document.querySelector('.library')

//Constructor
function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    },
    console.log(this.info)
};


//Functions
function addBookToLibrary() {
    //temporary. will later on take user input. Test multiple books
    let newBook = new Book('Inheritance', 'Paolini', '1,000', 'yes')
    
    myLibrary.push(newBook)
    console.log(myLibrary)
    render()
};

function render() {
    for (let i = 0; i < myLibrary.length; i++) {
        liveLibrary.innerHTML += myLibrary[i]
    };
};

function displayForm() {

};

//Buttons
let newBookButton = document.getElementById('newBook')
newBookButton.addEventListener('click', function(e) {


});