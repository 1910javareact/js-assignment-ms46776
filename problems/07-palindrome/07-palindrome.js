/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {

    let reverse = ""        		            
    for (let i = someStr.length-1; i >= 0 ; i--) {       
            reverse += someStr.charAt(i)               
    }
    return ((reverse === someStr) ? true : false)
}
console.log(isPalindrome("racecar"))
  