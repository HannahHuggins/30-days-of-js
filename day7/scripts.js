/* Day 7 - different ways for sorting through an array (JSON object) 
using .some, .every, .find, .findIndex, .splice and .splice. */




const people = [
    { name: 'wes', year: 1988},
    { name: 'kate', year: 1986},
    { name: 'Irv', year: 1970},
    { name: 'lux', year: 2015},
];
// JSON object within a constant variable called people. 


const comments = [
    { text: 'Love this!', id: 523423},
    { text: 'Super good', id: 823423},
    { text: 'this is so random', id: 2039842},
    { text: 'ramen is my fav food', id: 124563},
    { text: 'whatever', id: 212313}
];
// JSON object within a constant variable called comments. 


const isAdult = people.some(function(person){
const currentYear = (new Date()).getFullYear();
if (currentYear - person.year >= 19) {
    return true;
    }
});
document.write(isAdult);
/* Declaring a constant variable called isAdult and assigning it to the people.some function,
which will sort through the JSON object to find what we've specified (what person.year is).

The variable currentYear is the function new date with the .getFullYear method, this will search for the year and apply 
it to the constant variable currentYear. 

The if statement says that if the currentYear minus the person's year (person.year) is more than or equal to
19, then return true. 
*/


const isAdult = people.some(person => {
const currentYear = (new Date()).getFullYear();
return currentYear - person.year >= 19;
});
// simplified version of the above, removed the if statement as the return statement will either return true or false. 


const isAdult =  people.some(person => ((new Date()).
getFullYear()) - person.year >= 19);
//simplified again  - implicit return without the curly brackets 

// --------------------------------------------------------------------------------------------// 

const allAdults = people.every(person => ((new Date())
.getFullYear()) - person.year >= 19);
console.log(allAdults);
/*.every - checks if something applies to everyone (eg. is everyone 19?)
The constant variable allAdults is being assigned to the people.every method, which is checking if the full date minus 
the person's year (for all adults) is more than or equal to 19. 
The console.log will log either true or false. 
*/


const comment = comments.find(function(comment){
    if(comment.id === 823423){
        return true;
    }
});
console.log(comment);
/*.prototype.find() - kind of like filter, doesn't return a sub set of the array, returns the first item that the array finds.
So the comment variable is assigned to the comment.find method, which contains a function containing a comment. 
The if statement uses dot notation from the JSON object to confirm if the comment id and the id are the same, 
and if they are, return true. 
*/


const comment = comments.find(comment => comment.id === 823423);
console.log(comment);
/* Cutting out the function keyword and using arrow function to find the comment with this particular comment id. 
"Find the comment that is relevant to this comment.id and log it to the console."*/


const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);
/*.findIndex - will find where something is in an array. E.g- need to delete something in the array but need to know where it is.
The index variable is assigned to the comments.findIndex method, which is looking for the comment with the comment id 823423,
the index will then be found and logged to the console. */
comments.splice(index, 1);
// This will remove the comment assigned to the variable index. 
const newComments = [
    ...comments.slice(0, index),
    ...comment.slice(index +1)
];
/*this will build a new array of the comments. The first slice will have extracted the first comment from the index variable(823423),
and the second slice will be the index variable plus 1, meaning the next comment in the JSON object.*/


