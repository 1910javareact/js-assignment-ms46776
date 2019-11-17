/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    let output=""        		     
        
    for (let i=someStr.length-1; i>=0 ; i--) {
    
            output += someStr.charAt(i)
    }
    return output	
}
console.log(reverseStr("exit"))