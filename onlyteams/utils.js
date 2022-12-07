// Напишите функцию, которая определяет уникальны ли все символы в строке.
//  Регистр должен учитываться: `‘a’` и `‘A’` разные символы.

const checkMyString = (str) => new Set(str).size === str.length;

// Напишите функцию, которая принимает строку и возвращает новую, в которой все дублирующиеся символы будут удалены.
function removeDupes(str) {
  const set = new Set(str);
  return Array.from(set).reduce((a, b) => a + b);
}

// Напишите функцию, которая принимает массив строк и возвращает самую частовстречающуюся строку в этом массиве.
// Если таких строк несколько, то нужно вернуть первую, идя слева на право.

function highestFrequency(array) {
  const obj = {};
  array.forEach((el) => (!obj[el] ? (obj[el] = 1) : (obj[el] += 1)));
  return Object.entries(obj).sort((a, b) => b[1] - a[1])[0][0];
}

//Напишите функцию, которая принимает 2 строки. Верните true если строки являются перевернутым
// вариантом друг друга.Иначе верните false.

function isStringRotated(source, test) {
  return source.split("").sort().join("") === test.split("").sort().join("");
}

//Напишите функцию, которая проверяет, является ли второй массив подмножеством первого.
//То есть есть ли элементы второго массива в первом.

function arraySubset(source, subset) {
  if (source.length !== subset) return false;
  for (let i = 0; i < subset.length; i++) {
    const q = source.indexof(subset[i]);
  }
}

console.log(arraySubset([2, 1, 3], [1, 2, 3])); // -> true
console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])); // -> true
console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])); // -> false

// Напишите функцию, принимающая массив с вложенными массивами
// и распакуйте в результирующий плоский массов.В результате должны получить новый одномерный массив.
const arr = [[[[1]], [[2, 3]], [[[4]]]]];

function flatten(array) {
  array.flat();
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      array.flat();
    }
  }
  return array;
}
