const array1 = [1, 1, 2, 2, 2, 5, 5, 5, 2, 7];

const sortedArray = (arr) => {
    const obj = {};
    arr.forEach(element => { !obj[element] ? obj[element] = 1 : obj[element] += 1 });
    return Object.entries(obj).sort((a, b) => b[1] - a[1]).map(el => el[0]);
}

console.log(sortedArray(array1));