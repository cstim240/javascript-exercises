const findTheOldest = function(array, person) {
    let currentOldest = person;
    let age = 0;
    array.forEach((person) => {
        if (!person.hasOwnProperty('yearOfDeath')){
            person.yearOfDeath = new Date().getFullYear();
        }
        let ageInQuestion = person.yearOfDeath - person.yearOfBirth;
        if (ageInQuestion > age){
            currentOldest = person;
            console.log(currentOldest);
            age = ageInQuestion;
        }
    });
    return currentOldest;
};


// Do not edit below this line
module.exports = findTheOldest;
