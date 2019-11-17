/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
  
  //create new array and copy 
  let newArr = [...someArr]
  
  for (let i = index; i < newArr.length; i++) {
      newArr[i] = newArr[i+1]
  }
  
  newArr.pop()
  
  return newArr
}
