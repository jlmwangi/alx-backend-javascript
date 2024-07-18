export default function hasValuesfromArray(set, array) {
  for (const elem of array) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}
