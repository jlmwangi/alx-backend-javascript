export default function getListStudentIds(arr) {
  // returns an array of ids from a list of object
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.map((array) => array.id);
}
