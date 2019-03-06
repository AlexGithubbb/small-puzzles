/*
Question 1: Clean the room function: given an input of[1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20], make a function that organizes these into individual array that is ordered.For example answer(ArrayFromAbove) should return: [[1, 1, 1, 1], [2, 2, 2], 4, 5, 10, [20, 20], 391, 392, 591].Bonus: Make it so it organizes strings differently from number types.i.e. [1, "2", "3", 2] should return [[1, 2], ["2", "3"]]

Question 2: Write a javascript function that takes an array of numbers and a target number.The function should find two different numbers in the array that, when added together, give the target number.For example: answer([1, 2, 3], 4)should return [1, 3]

Question 3: Write a function that converts HEX to RGB.Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.
*/


// Answer1:
/*
1. loop through the array
2. make the array an ordered array
3. if any items get the same value, push them into a new array
4. log the arrayLists out
*/



const array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
function getDuplicates(number, array) {
  // given a number and an array, if the number repeats itself returns a sub-array;
  // i.e. getDuplicates(4,[1,1,2,3,4,4,5]) -> [4,4]
  if (array.includes(number)) {
    return array.filter(num => num === number);
  }
}
function answer(arr) {
  arr.sort((a,b) => a-b);
  //(15) [1, 1, 1, 1, 2, 2, 2, 4, 5, 10, 20, 20, 391, 392, 591]
  let final = [];
  let repeats = [];
  for(let i = 0; i < arr.length; i ++){
    if (!repeats.includes(arr[i])) {
      if (arr[i] === arr[i + 1]) {
        repeats.push(arr[i]);
        // a.push(repeats);
        final.push(getDuplicates(arr[i], arr));
      } else {
        final.push(arr[i]);
      }
    }
  }return final;
}
answer(array);


//  solution example
/*
room = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const cleanRooms = (rooms) => {
  let unique = [...new Set(rooms)];
  let subRoomArray = [];
  let orderedRooms = [];

  unique = unique.sort((a, b) => a -b);
  unique.forEach(uniqueSubRoom => {
    subRoomArray = room.filter(function (subRoom){
    return subRoom === uniqueSubRoom;
  })
    if(subRoomArray.length <=1){
      orderedRooms.push(subRoomArray[0]);
    } else {
        orderedRooms.push(subRoomArray);
    }
  })

  return orderedRooms.sort((a,b) => a -b);
} */

// Q1-Bonus:
array2 = [2, "3", "2", 1];
function answer12(arr){
  arr.sort((a, b) => a-b);
  let a = [[],[]];
  arr.map(value => typeof value === "number"? a[0].push(value): a[1].push(value));
  return a;
}
answer12(array2);

/*Question 2: Write a javascript function that takes an array of numbers and a target number.The function should find two different numbers in the array that, when added together, give the target number.For example: answer([1, 2, 3], 4)should return [1, 3]
*/
const test = (arr, target) => {
  let newArray = [];
  arr.forEach(function (item, i) {
    for (var j = 1; j < arr.length; j++) {
      if (arr[i] + arr[i + j] === target) {
        let arr2 = [arr[i], arr[i + j]];
        newArray.push(arr2);

      }
    }
  })
  return newArray;
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 10;
test(array, target)
