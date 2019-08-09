const router = require("express").Router();
const { Student } = require('../database/models');
const { Campus } = require('../database/models')

router.get("/", (req, res, next) => {
    Student.findAll()
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

  foundStudent.update(req.body);

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

  module.exports = router;