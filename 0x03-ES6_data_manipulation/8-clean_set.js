export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }
  const result = [];
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      result.push(value.slice(startString.length)); // append value without startstring
      result.push('-'); // use - as a separator btw the words
    }
  });
  if (result.length > 0) {
    result.pop(); // remove last separator
  }
  return result.join('');
}
