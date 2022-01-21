var portalString = "The cake is a lie";
function countingCharacters(portalString) {
}
console.log(portalString + " has " + portalString.length + " characters.");

// next function
function countingCharacters(stringToCount) {
}
var stringToCount = prompt("What is your word?");
console.log(stringToCount + " has " + stringToCount.length + " characters.");

// counting Characters2
function countingCharacters2(stringToCount, characterToFind) {
   
}

var stringToCount = "strawberry is a berry";
var characterToFind = "a";
var characterCount = 0;
    for (var characterPosition = 0;
        characterPosition < stringToCount.length;
        characterPosition++){
        if (stringToCount[characterPosition] == characterToFind) {
            characterCount++;
        }
    }

console.log("String to search in: " + stringToCount);
console.log("Character to find: " + characterToFind);
console.log("Number of times the character appears: " + characterCount);

//CountingCharacters3
function CountingCharacters3(str, search) {
    var count = 0; //number found
    var numChars = search.length;
    
    var lastIndex = str.length - numChars;
    
    for (var index = 0; index <= lastIndex; index++){
    // substring gets a part of a string from a start to end index 
        var current = str.substring(index, index + numChars);    
         // if the substring matches our series, increase our counter  
        if (current == search) {
            count++;
        }
    }
    //console.log("String to search in: " + str);
   // console.log("Character to find: " + search);
   // console.log("Number of times the character appears: " + count);
    return count;
}

