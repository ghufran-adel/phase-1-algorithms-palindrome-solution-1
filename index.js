function isPalindrome(word) {
  // Write your algorithm here
  const reverse=word.split('').reverse().join('');
  if (reverse.toLowerCase()===word.toLowerCase()){
    return true;
  }
  else return false ;
}


/* 
  Add your pseudocode here
 if the word equal to its revers the output should be true
 if not output should be false
*/

/*
  Add written explanation of your solution here
  -split the word to letter in array
  -reverse the letters
  -join the letters to get the revrse word as string 
  -add the condtion if the word ===to revers one or not 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
