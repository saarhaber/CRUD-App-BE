const router = require("express").Router();
const { Student } = require('../database/models');

router.get("/", (req, res, next) => {
    Student.findAll()
      .then(students => res.json(students))
      .catch(next)
});

router.get("/:id", (req, res, next) => {
    Student.findByPk(req.params.id)
      .then(student => res.json(student))
      .catch(next)
});

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