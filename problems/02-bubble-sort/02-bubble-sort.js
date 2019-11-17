/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
  

 let newArray = [...numArray]
 
 for (let i = 0; i < newArray.length; i++) {
     
     for (let j = 0; j < newArray.length; j++) {
         
         if (newArray[j] > newArray[j+1]){
             let temp = newArray[j]
             newArray[j] = newArray[j+1]
             newArray[j+1] = temp
         }
     }
 }
 return newArray
}
