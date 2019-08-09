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
  // console.log("yeet");
  for (let i = 0; i < students.length; i++) {
    
    let currentStudent = students[i];
    let builtStudent = await Student.create(currentStudent);
     
     
    await builtStudent.setCampus(i+1);
    await console.log(builtStudent.campusId);
    await builtStudent.save();

  }
}
const seedDatabase = async () => {
  try {
    await populateCampusesTable(campuses);
    await populateStudentsTable(students);
    console.log("Successfully seeded!");
    process.exit(0);
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }
}

seedDatabase();
