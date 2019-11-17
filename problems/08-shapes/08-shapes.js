/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  
    switch (shape) {
      case "Square":
        
        for(let i = 0; i < height; i++){
          let temp = ""
          
          for(let j = 0;j < height; j++){
            temp += character
          }
          console.log(temp);
        }
        break;
      case "Triangle":
        
        for(let i = 0; i < height; i++){
          let temp = ""
          
          for(let j = i;j > -1; j--){
            temp += character
          }
          console.log(temp);
        }
        break;
      case "Diamond":
        
        let star = 0
        
        let half = Math.floor(height/2) +1
      
        let secHalf = Math.floor(height/2)
        
        let spaces = half - 1
        
        for(let i = 0; i < half; i++){
          let temp = ""
          
          for(let j = 0;j < spaces; j++){
            temp += " "
          }
          
          for(let j = 0;j <= star; j++){
            temp += character
          }
          
          spaces--
          star += 2
          console.log(temp);
        }
        
        spaces = 0
        star = half
        
        for(let i = secHalf; i > 0; i--){
          let temp = " "
          
          for(let j = 0;j < spaces; j++){
            temp += " "
          }
          
          for(let j = 0;j < star; j++){
            temp += character
          }
        
          spaces++
          star -= 2
          console.log(temp);
        }
        break;
    }
  }