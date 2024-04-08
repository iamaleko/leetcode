/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
const countStudents = (students, sandwiches) => {
  let a = 0, b = 0;
  for (const val of students) val ? a++ : b++;
  for (const val of sandwiches) {
    if ((val ? a : b) === 0) break;
    val ? a-- : b--;
  }
  return a + b;
};