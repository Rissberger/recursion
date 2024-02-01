/** product: calculate the product of an array of numbers. */
function product(nums, index = 0) {
  if (index === nums.length) return 1;
  return nums[index] * product(nums, index + 1);
}

/** longest: return the length of the longest word in an array of words. */
function longest(words, index = 0, longestLength = 0) {
  if (index === words.length) return longestLength;
  return longest(words, index + 1, Math.max(words[index].length, longestLength));
}

/** everyOther: return a string with every other letter. */
function everyOther(str, index = 0, result = '') {
  if (index >= str.length) return result;
  return everyOther(str, index + 2, result + str.charAt(index));
}

/** isPalindrome: checks whether a string is a palindrome or not. */
function isPalindrome(str, start = 0, end = str.length - 1) {
  if (start >= end) return true;
  if (str[start] !== str[end]) return false;
  return isPalindrome(str, start + 1, end - 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */
function findIndex(arr, val, index = 0) {
  if (index === arr.length) return -1;
  if (arr[index] === val) return index;
  return findIndex(arr, val, index + 1);
}

/** revString: return a copy of a string, but in reverse. */
function revString(str, index = str.length - 1, result = '') {
  if (index < 0) return result;
  return revString(str, index - 1, result + str[index]);
}

/** gatherStrings: given an object, return an array of all of the string values. */
function gatherStrings(obj) {
  let result = [];
  for (let key in obj) {
      if (typeof obj[key] === 'string') {
          result.push(obj[key]);
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
          result = result.concat(gatherStrings(obj[key]));
      }
  }
  return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
* return the index of that value (or -1 if val is not present). */
function binarySearch(arr, val, low = 0, high = arr.length - 1) {
  if (low > high) return -1;
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === val) return mid;
  if (arr[mid] > val) return binarySearch(arr, val, low, mid - 1);
  else return binarySearch(arr, val, mid + 1, high);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
