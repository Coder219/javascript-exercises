const findTheOldest = function(peopleArr) {
    peopleArr.forEach((person) => {if (!Object.hasOwn(person, 'yearOfDeath')) person.yearOfDeath = new Date().getFullYear();})
    agesArr = peopleArr.map((person) => person.yearOfDeath - person.yearOfBirth);
    return peopleArr[agesArr.indexOf(Math.max(...agesArr))];
};

// Do not edit below this line
module.exports = findTheOldest;
