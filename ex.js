const dynamicMethod = "getSummary";
const dynamicProp = "rating";
const ratingValue = 4.8;

const book = {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    [dynamicProp]: ratingValue, // Computed property name

    // Computed method name
    [dynamicMethod]() {
        return `${this.title} by ${this.author}`;
    }
};

console.log(book); // Outputs the object with the dynamic property
console.log(book[dynamicMethod]()); // Calls the dynamic method and outputs: "1984 by George Orwell"
console.log(book.rating); // Outputs: 4.8
