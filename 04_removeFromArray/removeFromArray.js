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
 * if (target.length > 1){
        for (let i = 0; i < target.length; i++){
            let targetIndex = array.indexOf(target[i]);
            newArr = array.splice(targetIndex, targetIndex);
            return newArr;
        }
    } 
 */

// Do not edit below this line
module.exports = removeFromArray;
