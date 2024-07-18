export default function updateStudentGradeByCity(students, city, newGrades) {
  // new grades is an array of objects
  const filteredStudents = students.filter((student) => student.location === city);
  const res = filteredStudents.map((student) => {
    const gradeObject = newGrades.find((grade) => grade.studentId === student.id);
    const newGrade = gradeObject ? gradeObject.grade : 'N/A';
    return {
      id: student.id, firstName: student.firstName, location: city, grade: newGrade,
    };
  });
  return res;
}
