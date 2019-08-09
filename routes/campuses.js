const router = require("express").Router();
const { Campus } = require('../database/models')

router.get("/", (req, res, next) => {
    Campus.findAll()
        .then(campus => res.json(campus))
        .catch(next)
});

router.get("/:id/students", async function(req, res, next){
    let foundCampus;

    try {
        foundCampus = await Campus.findOne({ where: { id: req.params.id} });
    }
    catch (err){
        next(err);
    }

    let studentsOfCampus;

    try {
        studentsOfCampus = await foundCampus.getStudents();
    }
    catch (err) {
        next(err);
    }
    
    res.status(200).json(studentsOfCampus);
});

router.post("/", (req, res, next) => {
    let newCampus = req.body;
    Campus.create(newCampus);
    res.status(200).json("Campus created!");
  })
  
//   router.put("/:id", (req, res, next) => {
//       indexofc = -1;
//     for(let i = 0; i < campuses.length; i++){
//         if(campuses[i].id == req.params.id){
//             indexofc = i;
//         }

//     }
//     if(indexofc === -1)
//         res.status(400).send("Campus not found");

//     campuses[indexofc] = req.query;
//     res.status(200).send(campuses)

//   })

//   router.delete("/:id", (req, res, next) => {
//     campuses = (campuses.filter(campus => campus.id != req.params.id));
//     res.status(200).send(campuses);
//   })
module.exports = router;