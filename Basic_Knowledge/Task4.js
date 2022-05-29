function numberOfPairs(target, array) {
    array = array.filter(number => {return number <= target});
    let result = 0
    for (let i = 0; i < array.length; i++)
        for (let j = i + 1; j < array.length; j++)
            result = (array[i] + array[j] === target) ? result + 1 : result;

    return result;
}

console.log(numberOfPairs(5, [1, 3, 6, 2, 2, 0, 4, 5]));
console.log(numberOfPairs(1, [1, 3, 6, 2, 2, 0, 4, 5]));
console.log(numberOfPairs(10, [10, 0, 5, 6, 4]));