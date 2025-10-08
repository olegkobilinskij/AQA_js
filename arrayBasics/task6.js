const numberList = [1,10,14,2,4,5,43,34];
const numberListCopy = numberList.slice().sort((a, b) => a - b);
console.log(numberListCopy);