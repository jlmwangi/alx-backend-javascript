import ClassRoom from './0-classroom';

export default function initializeRooms() {
  // return an array 0f 3 Classroom objects
  const array = [];
  const class1 = new ClassRoom(19);
  const class2 = new ClassRoom(20);
  const class3 = new ClassRoom(34);

  array.push(class1);
  array.push(class2);
  array.push(class3);

  return array;
}
