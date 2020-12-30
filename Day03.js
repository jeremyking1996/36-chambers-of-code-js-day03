class Problem {

    /**
     * Have the function SimpleEvens(num) check whether every single number in the passed in parameter is even. 
     * If so, return the string true, otherwise return the string false. 
     * 
     * For example: if num is 4602225 your program should return the string false because 5 is not an even number.
     */
    
    // Step 1. Convert number to string
    // Step 2. Split the string
    // Step 3. Loop through the numbers with a for loop
    // Step 4. Use a conditional statement to test if every number divisible by 2, return true or false
    
    
    simpleEvens(num) {
        let str = num.toString();
        let splitStr = str.split("");
        for(let i = 0; i < splitStr.length; i++){
            if(splitStr[i] % 2 != 0)
                return false;
        }
        return true;
    }

    /**
     * Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, 
     * and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return 
     * the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program 
     * should return false as well.
     * 
     * For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, 
     * and 3 question marks between 5 and 5 at the end of the string.
     */


    questionsMarks(str) {
        let splitStr = str.split("");
        let clean = splitStr.match(/[0-9?]/g);
        clean = clean.join("");
        
        // code goes here  
        return null;
    }

    /**
     * Have the function SnakeCase(str) take the str parameter being passed and return it in proper snake case format where each 
     * word is lowercased and separated from adjacent words via an underscore. The string will only contain letters and some 
     * combination of delimiter punctuation characters separating each word.
     * 
     * For example: if str is "BOB loves-coding" then your program should return the string bob_loves_coding.
     */
    
     // Step 1. Seperate string by using a split method as well as, non alphanumeric regEx
    // Step 2. lowercase everything and seperate by underscore
    // Step 3. Join new string with snake case
    // Step 4. Return new string
    snakeCase(str) {
        let strSplit = str.split(/[^A-Za-z]/);
        let snakeCaseStr = strSplit.join("_");
        let answer = snakeCaseStr.toLowerCase();
        
        // code goes here  
        return answer;
    }

    /**
     * Have the function GCF(arr) take the array of numbers stored in arr which will always contain only 
     * two positive integers, and return the greatest common factor of them. 
     * 
     * For example: if arr is [45, 12] then your program should return 3. 
     * There will always be two elements in the array and they will be positive integers.
     */
    // Step 1. Loop through array
    // Step 2. Search for greatest common factor 
    // Step 3. 
    gcf(arr) {
        let smallVal = 0;

        arr[0] > arr[1] ? smallVal = arr[1] : smallVal = arr[0];

        for(let i = smallVal; i < 0; i--){
            if(arr[0] % == 0 && arr[1] % == 0){
                // code goes here
                return i;
                break
            }
        }
      }


}

module.exports = Problem;