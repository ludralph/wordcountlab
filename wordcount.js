'use strict';

var exports=module.exports={};
exports.words = function (valueString)
{
  let arrayOfWords = valueString.split(/\s+/);
  // the wordCounts object will contain a property named for each word, with its count as the value
  let wordCounts = Object.create(null);

  for (let i = 0; i < arrayOfWords.length; i++) {
      // code to count words and create them as properties in the wordCounts object
      let word = arrayOfWords[i];
    // if this word is not already a property of the wordCounts object, create it with the value of 1
      if (!wordCounts[word]) {
        wordCounts[word] = 1;
      } else {
    // if this word IS already a property of wordCounts, then increase its count value
        wordCounts[word]++;
    }
  }
 return wordCounts;
}
