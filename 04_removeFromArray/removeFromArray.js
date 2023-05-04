const removeFromArray = function(array, ...target) {
    const newArr = [];

    for (let i = 0; i < array.length; i++){
        if (target.includes(array[i])){
            continue;
        } else {
            newArr.push(array[i]);
        }
    }

    return newArr;

}

/**
 * other solution
 * return array.filter(element => !args.includes(element))
 */

// Do not edit below this line
module.exports = removeFromArray;
