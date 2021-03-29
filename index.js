//*TASK ONE
function letterCheck(sentence, letter){
  if (typeof sentence === 'string' && typeof letter === 'string'){
    let count = 0
    sentence.split('').map(char => {
      letter === char.toLocaleLowerCase() ? count++ : ''
    })
    return count
  } else {
    console.log('Please provide strings only as parameters')
  }
}

/*Explanation
Checks to see if the supplied parameters are the correct type.
Create a new varibale to use as counter.
Split sentence into letters and map over it. Each time a letter in the sentence matches the suppled letter the count is increased.
*/


//*TASK TWO
function palindromeCheck(sentence){
  if (typeof sentence === 'string'){
    const reverseSentence = sentence.split('').reverse().join('').toLowerCase().replace(/[^a-z]/g, '')
    const noSpacesString = sentence.toLowerCase().replace(/[^a-z]/g, '')
    if (noSpacesString === reverseSentence){
      return true
    } else {
      return false
    }
  } else {
    console.log('Please provide strings only as parameters')
  }
}

/*Explanation
Checks to see if the supplied parameters are the correct type.
Create a reverseSentence variable that copies the sentence string splits into words array, reverses the order of the words, joins the sentence back together, converts the sentence to lower case and removes characters that are not letters.
Create a noSpaceString that copies the sentence string, coverts it to lower case and removes all characters that are not letters.
Compares reverseSentence and noSpaceSentence. If strings match a boolean value of true is returned. If not false is returned.
*/


//*TASK THREE
//*PART A
function countCensoredWords(sentence, words){
  if (typeof sentence === 'string' && typeof words === 'object'){
    const results = {}
    for (const key of words){
      results[key] = 0
    }
    results.total = 0
    sentence.toLowerCase().replace(/[^a-z\s]/g, '').split(' ').map(item => {
      words.map(word => {
        if (item === word){
          results[word]++
          results.total++
        }
      })
    })
    return results
  } else {
    console.log('Please provide a string as the first parameter and a array as the second parameter')
  }
}

/*Explanation
Checks to see if the supplied parameters are the correct type.
Converts words array to an object.
Assigns total key to results object with a value of of 0.
Sentence parameter is coverted to lowercase, all special charaters are removed, split into an array of words and then mapped over.
The words array is then mapped over and sentence array is compared to the words array. If there is a match, the key of the results object that has the same name is incremented by 1 and the total is updated by 1.
*/



// //*TASK THREE
// //*PART B
function censorCensoredWords(sentence, words){
  if (typeof sentence === 'string' && typeof words === 'object'){
    const censoredString = sentence.split(' ').map(item => {
      words.map(word => {
        if (word === item.toLowerCase().replace(/[^a-z\s]/g, '')){
          item = item.split('').map((letter, index) => {
            if (index !== 0 && letter !== word[word.length - 1] && letter !== '.'){
              return '$'
            } else {
              return letter
            }
          }).join('')
        } 
      })
      return item
    })
    return censoredString.join(' ')
  } else {
    console.log('Please provide a string as the first parameter and a array as the second parameter')
  }
}

/*Explanation
Checks to see if the supplied parameters are the correct type.
Create a new variable censoredString and assign it sentence parameter.
Split sentence into an array of words. Then map over words array and compare the words array and sentence array. If a word matches. The matching word is then split into an array of letters and all letters are replaced with $ symbols apart from the first and last letter.
The censoredString is joined into a string and returned.
*/


//*TASK THREE
//*PART C
function censorPalindromeWords(sentence){
  if (typeof sentence === 'string'){
    const palindromeSentence = sentence.split(' ').map(word => {
      const palindromeWord = word.toLowerCase().replace(/[^a-z\s]/g, '').split('').reverse().join('')
      if (palindromeWord === word.toLowerCase().replace(/[^a-z\s]/g, '')){
        const censoredWord = word.split('').map((letter, index) => {
          if (index !== 0 && index !== word.length - 1 && letter !== palindromeWord[palindromeWord.length -  1]){
            return '$'
          } else {
            return letter
          }
        }).join('')
        return censoredWord
      } else { 
        return word
      }
    })
    return palindromeSentence.join(' ')
  } else {
    console.log('Please provide a string as a parameter')
  }
}


/*Explanation
Checks to see if the supplied parameters are the correct type.
palindromeSentence variable is created and assigned the sentence parameter.
The sentence parameter is then split into an array of words and mapped over.
palindromeWord variable is created and assigned the word value. That is then coverted to lower case, has all special characters removed, split into an array of letters, order is reversed and joined back into a string.
palindromeWord variable is then compared to word value that has been convereted to lower case and had any non letter characters removed.
If a match is found, the matching word is split into letters and all the letters apart from the first and last letter are replaced with $ symbols. 
The palindromeSentence is joined back together and returned.
*/

//*PART D: BONUS
/*

<p>I'm not sure if I understood the question correctly, but the answers I'm giving in the bonus section are how the censorCensoredWord function would be used in q application. My apologies if this is incorrect</p>

Scenrio One: Applied to directly data that has been sent back from the database prior to it being rendered to the DOM.

Scenario Two: Used in a onClick event when a user is choosing to make data censored.

Scenario Three: Applied to data depending in a users level of access
*/

module.exports = {
  letterCheck,
  palindromeCheck,
  countCensoredWords,
  censorCensoredWords,
  censorPalindromeWords,
}
