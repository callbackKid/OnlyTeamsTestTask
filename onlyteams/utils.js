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
  if (source.length < subset.length) {
    return false;
  }
  for (let i = 0; i < subset.length; i++) {
    let ind = source.indexOf(subset[i]);
    if (ind === -1) {
      return false;
    }
    delete source[ind];
  }
  return true;
}

// Напишите функцию, которая проверяет, являются ли все элементы в массиве анаграммами друг друга.
function allAnagrams(array) {
  const p = array[0].split("").sort().join("");
  return array
    .map((el) => el.split("").sort().join(""))
    .every((el) => el === p);
}
// Необходимо вернуть индекс числа, если оно есть в массиве. Иначе вернуть - 1.
function search(array, target) {
  return array.includes(target) ? array.indexOf(target) : -1;
}

// Напишите функцию, которая проверит строку на сбалансированность скобок: {}, (), [].
//Вернуть true если они сбалансированы, иначе false.

function isBalanced(string) {
  let count = 0;
  const a = "{([";
  const b = "})]";

  string.split("").forEach((el) => {
    if (a.includes(el)) count++;
    if (b.includes(el)) count--;
  });
  return count % 2 === 0;
}

// Напишите функцию, принимающая массив с вложенными массивами
// и распакуйте в результирующий плоский массов.В результате должны получить новый одномерный массив.
const arr = [[[[1]], [[2, 3]], [[[4]]]]];

function flatten(array) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      array.flat();
    }
  }
  return array;
}
