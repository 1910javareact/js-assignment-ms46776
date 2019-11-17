/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {

        
        let len = someStr.length
        let output = ""
        
        if (isNaN(startIndex) || isNaN(endIndex)){
            throw "input was incorrect";
        }
        for(let i = startIndex; i < endIndex; i++){
            output += someStr.charAt(i)
        }
    
        return output
    
    }