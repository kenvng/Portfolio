
// Palindrome function, prompt user to enter a string and prompt user whether it is palindrome or not.
function palindrome(myString) {
  // prompt user to enter a phrase or a series of numbers 
  myString = prompt ("Please enter a phrase and/or numbers to check for palindrome: ", "");	

  /* remove special characters, spaces and make lowercase */
  var removeChar = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();

  /* reverse removeChar for comparison*/
  var checkPalindrome = removeChar.split('').reverse().join('');

  /* Check to see if myString is a Palindrome by comparing removeChar and checkpalindrome */
  if(removeChar === checkPalindrome){
    document.getElementById("palindrome").innerHTML = "<div>"+ myString + " is a Palindrome <div>";
    // document.write("<div>"+ myString + " is a Palindrome <div>");
  }
  else{
    document.getElementById("palindrome").innerHTML = "<div>"+ myString + " is NOT a Palindrome <div>";
    // document.write("<div>" + myString + " is not a Palindrome </div>");
  }
  return 0;
}

//EXAMPLES:
// Oh who was it I saw, oh who?	
// madam										
// 1,2,3,4,3,2,1			
// nurses run
// 123454321