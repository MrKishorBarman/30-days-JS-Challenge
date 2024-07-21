// Task_1
const book = {
    title: "Gitanjali",
    author: "Rabindranath Tagore",
    year: 1910
}

console.log(book)

// Task_2
console.log(book.title, book.author)

// Task_3
book.detail = () => {
    console.log(`${book.title}, a collection of poetry, the most famous work by ${book.author}, was published in India in ${book.year}.`)
}
book.detail()

// Task_4
book.updateYear = (YEAR) => {
    book.year = YEAR
    console.log(book)
}
let YEAR = 1913
book.updateYear(YEAR)

// Task_5

const library = {
    name: "ABC library",
    books: [
        {
            title: "Bengali",
            year: 1996
        },
        {
            title: "Math",
            year: 2010
        },
        {
            title: "English",
            year: 2008
        },
        {
            title: "Physics",
            year: 2011
        }
    ]
}
console.log(library)

// Task_6
let titles_of_books = []
for(let book of library.books){
    titles_of_books.push(book.title)
}
console.log(library.name, titles_of_books)

// Task_7
book.returnString = (function(){
    return (`The title of the book is ${this.title} and the year for the book is ${this.year}`)
})
console.log(book.returnString())

// Task_8
for (let i in book) {
    console.log(`${i}: ${book[i]}`)
}

// Task_9
console.log(`The keys of the book object are ${Object.keys(book)}`)

console.log(`The values of the book object are ${Object.values(book)}`)
