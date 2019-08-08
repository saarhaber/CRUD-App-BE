const { Campus, Student} = require('../database/models');

const campuses = require('../data/campuses'); // 10 campuses
const students = require('../data/students'); // 10 coaches;

const populateCampusesTable = async (campuses) => {
  for (let i = 0; i < campuses.length; i++) {
    let currentCampus = campuses[i];
    await Campus.create(currentCampus);
  }
}

const populateStudentsTable = async (students) => {
  for (let i = 0; i < students.length; i++) {
    let currentStudent = students[i];
    let builtStudent = await Student.build(currentStudent);
    // console.log(Object.keys(builtStudent.__proto__));
    builtStudent.campusId = i;
    await builtPlayer.save();
  }
}
const seedDatabase = async () => {
  try {
    await populateStudentsTable(students);
    await populateCampusesTable(campuses);
    console.log("Successfully seeded!");
    process.exit(0);
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }
}

seedDatabase();
