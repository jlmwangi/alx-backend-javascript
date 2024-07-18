export default function updateUniqueItems(map) {
  for (const [key, value] of map.entries()) {
    if (value === 1) {
      map.set(key, 100);
    } else {
      console.error('Cannot process');
    }
  }
}
