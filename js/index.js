// function greet() {
//     console.log(`my name is ${this.name}, hi!`);
// }
//
// greet();
//
// let person = {
//     name: 'Bob',
//     greet: greet
// };
//
// person.greet();
//
// let sally = { name: 'Sally' };
//
// greet.call(sally);
//
// greet.apply(sally);



// let sally = { name: 'Sally' };
//
// function greet(customerOne, customerTwo) {
//     console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
// }
//
// greet.call(sally, 'Terry', 'George');
//
// greet.call(sally);
//
// greet.apply(sally, ['Terry', 'George']);
//
// let newGreet = greet.bind(sally); // newGreet is context-bound to sally

class Event {
    constructor(title, keywords) {
        this.title = title;
        this.keywords = keywords;
    }
}

class User {
    constructor(name, interests) {
        this.name = name;
        this.interests = interests;
    }

    // matchInterests(event) {
    //     return event.keywords.some(
    //         function(word) {
    //             return this.interests.includes(word);
    //         }.bind(this) // added to the and of the callback function
    //     );
    // }
    matchInterests(event) {
  return event.keywords.some(word => this.interests.includes(word));
}
}

let billy = new User('billy', ['music', 'art', 'movies']);
let freeMusic = new Event('Free Music Show', ['music', 'free', 'outside']);

billy.matchInterests(freeMusic);
