const router = require("express").Router();
const { Student } = require('../database/models');
const { Campus } = require('../database/models')

router.get("/", (req, res, next) => {
    Student.findAll({include : [Campus]})
      .then(students => res.json(students))
      .catch(next)
});

router.get("/:id", (req, res, next) => {
  Student.findByPk(req.params.id, {include: [Campus]})
    .then(student => res.json(student))
    .catch(next)
});

router.post("/", (req, res, next) => {
  let newStudent = req.body;
  Student.create(newStudent);
  res.status(200).json("Student created!");
})

//Puts modified student at end of json
router.put("/:id", async function(req, res, next){

  let foundStudent;

  try {
      foundStudent = await Student.findOne({ where: { id: req.params.id} });
  }
  catch (err){
      next(err);
  }
  console.log(req.body,"BODY")
  if (req.body.campusId === '0') {

    req.body.campusId = null;
    console.log(req.body,"BODYAFTERNUPP")
    await foundStudent.update(req.body);

    //await foundStudent.removeCampus();
  }
  else
  {
    await foundStudent.update(req.body);
  }
  

  res.status(200).send("Student updated!")

})

//does not update ids of rest of students
//example, delete student at id 1, does not set reset of
//students one back. its handled in the fe, but could have
//unintended side effects (or not work entirely)
router.delete("/:id", async function(req, res, next){

  let foundStudent;

  try {
      foundStudent = await Student.findOne({ where: { id: req.params.id} });
  }
  catch (err){
      next(err);
  }

  foundStudent.destroy();

  res.status(200).send("Student deleted!")

})

// router.post("/", (req, res, next) => {
//     let newStudent = req.body;
//     students.push(newStudent);
//     res.send(newStudent);
//   })
  
//   router.put("/:id", (req, res, next) => {
//     indexofs = -1;
//   for(let i = 0; i < students.length; i++){
//       if(students[i].id == req.params.id){
//           indexofs = i;
//       }

//   }
//   if(indexofs === -1)
//       res.status(400).send("Student not found");

//   students[indexofs] = req.query;
//   res.status(200).send(students)

// })

//   router.delete("/:id", (req, res, next) => {
//     students = (students.filter(student => student.id != req.params.id));
//     res.status(200).send(students);
//   })

  module.exports = router;