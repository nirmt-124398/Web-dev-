let arr = [1, 2, 3, 4, 5, 6]

let arr2 = [7, 8, 9]
let arr3 = [10, 11, 12]

console.log(arr) // [1, 2, 3, 4, 5, 6] - Initial array
console.log(arr.length) // 6 - Length of the array
console.log(arr[0]) // 1 - First element
console.log(arr[1]) // 2 - Second element
console.log(arr[2]) // 3 - Third element
console.log(arr[3]) // 4 - Fourth element
console.log(arr[4]) // 5 - Fifth element
console.log(arr[5]) // 6 - Sixth element
console.log(arr.pop()) // 6 - Removes and returns the last element
console.log(arr.push(88)) // 6 - Adds 88 to the end and returns new length
console.log(arr.join(" and ")) // "1 and 2 and 3 and 4 and 5 and 88" - Joins elements with " and "
console.log(arr.concat(arr2, arr3)) // [1, 2, 3, 4, 5, 88, 7, 8, 9, 10, 11, 12] - Concatenates arr2 and arr3 to arr
console.log(typeof arr) // "object" - Type of arr is object (arrays are objects in JavaScript)
console.log(arr.toString()) // "1,2,3,4,5,88" - Converts array to string
console.log(arr.pop()) // 88 - Removes and returns the last element (88)
console.log(arr.push("Nirmit")) // 6 - Adds "Nirmit" to the end and returns new length
console.log(arr) // [1, 2, 3, 4, 5, "Nirmit"] - Current state of the array
console.log(delete arr[2]) // true - Deletes element at index 2 (value 3)
console.log(delete arr[4]) // true - Deletes element at index 4 (value 5)
console.log(arr) // [1, 2, undefined, 4, undefined, "Nirmit"] - Array with deleted elements

let arr4 = [3, 6, 2, 5]
console.log(arr4) // [3, 6, 2, 5] - Initial state of arr4
console.log(arr4.sort()) // [2, 3, 5, 6] - Sorted array in ascending order
console.log(arr.splice(1, 2, 11, 22)) // [2, 3] - Removes 2 elements starting at index 1 and adds 11 and 22
console.log(arr) // [1, 2, 11, 22, undefined, "Nirmit"] - Current state of the array after splice
console.log(arr.slice(2, 5)) // [11, 22, undefined] - Extracts a section of the array from index 2 to 4
console.log(arr.reverse()) // ["Nirmit", undefined, 22, 11, 2, 1] - Reverses the array
