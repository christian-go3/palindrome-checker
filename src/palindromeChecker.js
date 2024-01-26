// function that checks whether a string argument is a palindrome or not.
export default function palindromeChecker(str) {
  if (!str || str.length === 1) {
    return null;
  }
  const regex = /[a-zA-Z0-9]/g;
  str = str.toLowerCase();
  const arr = str.match(regex);
  let backwardStr = '';
  if (arr !== null) {
    str = arr.join('');
    backwardStr = arr.reduceRight((str, char) => str + char);
  }
  if (backwardStr === str) {
    return true;
  }
  return false;
}
