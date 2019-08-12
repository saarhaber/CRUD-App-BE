const router = require("express").Router();
const { Campus } = require('../database/models')
const { Student } = require('../database/models')

router.get("/", (req, res, next) => {
    Campus.findAll({include : [{model:Student}]})
        .then(campus => res.json(campus))
        .catch(next)
});

router.get("/:id", async function(req, res, next){
    let foundCampus;

    try {
        foundCampus = await Campus.findOne({where: { id: req.params.id}, include: [{model: Student}]})
    }
    catch (err){
        next(err);
    }
    
    
    res.status(200).json(foundCampus);
});


// router.get("/:id/students", async function(req, res, next){
//     let foundCampus;

//     try {
//         foundCampus = await Campus.findOne({ where: { id: req.params.id} });
//     }
//     catch (err){
//         next(err);
//     }

//     let studentsOfCampus;

//     try {
//         studentsOfCampus = await foundCampus.getStudents();
//     }
//     catch (err) {
//         next(err);
//     }
    
//     res.status(200).json(studentsOfCampus);
// });

router.post("/", (req, res, next) => {
    let newCampus = req.body;
    Campus.create(newCampus);
    res.status(200).json("Campus created!");
  })
  
  //Puts modified campus at end of json
  router.put("/:id", async function(req, res, next){

    let foundCampus;

    try {
        foundCampus = await Campus.findOne({ where: { id: req.params.id} });
    }
    catch (err){
        next(err);
    }

    foundCampus.update(req.body);

    res.status(200).send("Campus updated!")

  })

  //does not update ids of rest of campuses
  //example, delete campus at id 1, does not set reset of
  //campuses one back. its handled in the fe, but could have
  //unintended side effects (or not work entirely)
  router.delete("/:id", async function(req, res, next){

    let foundCampus;

    try {
        foundCampus = await Campus.findOne({ where: { id: req.params.id} });
    }
    catch (err){
        next(err);
    }

    foundCampus.destroy();

    res.status(200).send("Campus deleted!")

  })

module.exports = router;