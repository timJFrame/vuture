/* eslint-disable no-undef */
const functionToTest = require('./index')

describe('letterCheck', () => {
  test('should return the number of times a given letter appears in a string', () => {
    expect(
      functionToTest.letterCheck('Adam eats apples all day', 'a')
    ).toEqual(6)
  })
})


describe('palindromeCheck', () => {
  test('returns true if suppled string is palindrome and false if not', () => {
    expect(
      functionToTest.palindromeCheck('Nurses run')
    ).toBe(true)
    expect(
      functionToTest.palindromeCheck('I like summer')
    ).toBe(false)
  })
})


describe('countCensoredWords', () => {
  test('returns how many times a each word in given list of words occurs in string and the total number of times all words have occured', () => {
    expect(
      functionToTest.countCensoredWords('My cat eats catchs lots of rats. I like my cat because he catchs all the rats', ['rats', 'cat', 'lots'])
    ).toEqual({ rats: 2, cat: 2, lots: 1, total: 5 })
  })
})


describe('censorCensoredWord', () => {
  test('finds all occurrences of teh supplied list of words in a given string. then censors those words. Apart from the first and last letter of each word.', () => {
    expect(
      functionToTest.censorCensoredWords('My cat catches lots of rats. I like my cat because he catches all the rats.', ['rats', 'cat', 'lots'])
    ).toEqual('My c$t catches l$$s of r$$s. I like my c$t because he catches all the r$$s.')
  })
})


describe('censorPalindromeWords', () => {
  test('finds all palindrome words that occurs in a given sentence and censors all letters in those words apart from the first and last letter', () => {
    expect(
      functionToTest.censorPalindromeWords('Anna did not see her dad today.But she did see her mum.')
    ).toEqual('A$$a d$d not see her d$d today.But she d$d see her m$m.')
  })
})