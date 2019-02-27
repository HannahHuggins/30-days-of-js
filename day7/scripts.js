const people = [
    { name: 'wes', year: 1988},
    { name: 'kate', year: 1986},
    { name: 'Irv', year: 1970},
    { name: 'lux', year: 2015},
];

const comments = [
    { text: 'Love this!', id: 523423},
    { text: 'Suer good', id: 823423},
    { text: 'this is so random', id: 2039842},
    { text: 'ramen is my fav food', id: 124563},
    { text: 'whatever', id: 212313}
];


const isAdult = people.some(function(person){
const currentYear = (new Date()).getFullYear();
if (currentYear - person.year >= 19) {
    return true;
    }
});

document.write(isAdult);


//.some - checks if at least one thing in the array meets what you're looking for
const isAdult = people.some(function(person){
const currentYear = (new Date()).getFullYear();
if (currentYear - person.year >= 19) {
return true;
}
});
//some takes a function that will check it for everyone we have, and will give us the 'person'
//if the current year - person.year is greater than or equals 19, return true. 

const isAdult = people.some(person => {
const currentYear = (new Date()).getFullYear();
return currentYear - person.year >= 19;
});
simplified 

const isAdult =  people.some(person => ((new Date()).
getFullYear()) - person.year >= 19);
//simplified again  - implicit return without the curly brackets 

console.log(isAdult);

//.every - checks if something applies to everyone (eg. is everyone 19?)
const allAdults = people.every(person => ((new Date())
.getFullYear()) - person.year >= 19);
console.log(allAdults);



//.prototype.find() - kind of like filter, doesn't return a sub set of the array, returns the first item that the array finds 
const comment = comments.find(function(comment){
    if(comment.id === 823423){
        return true;
    }
});
console.log(comment);


const comment = comments.find(comment => comment.id === 823423);
console.log(comment);


//.findIndex - will find where something is in an array. E.g- need to delete something in the array but need to know where it is 
const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);

comments.splice(index, 1);
// type in console.table(comments)

//could also create a new array of the updated comments

const newComments = [
    ...comments.slice(0, index),
    ...comment.slice(index +1)
];
//this will build a new array of the comments 


