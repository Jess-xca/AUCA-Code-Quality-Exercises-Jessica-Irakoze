// Function to check nesting level
function getNestingLevel(arr) {
  if (!Array.isArray(arr)) return 0;
  let max = 1;
  for (let item of arr) {
    if (Array.isArray(item)) {
      max = Math.max(max, 1 + getNestingLevel(item));
    }
  }
  return max;
}

// Function to flatten array
function flattenArray(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

