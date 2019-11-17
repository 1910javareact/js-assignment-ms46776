/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {

        for (const ring in someObj) {
        
            console.log(`${ring}: ${someObj[ring]}`);
        }
    }

