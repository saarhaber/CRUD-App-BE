const router = require("express").Router();
const { Campus } = require('../database/models')

// var campuses = [
//     {
//     "id": 1,
//     "name": "HUNTER COLLEGE",
//     "imageUrl": "https://d32ogoqmya1dw8.cloudfront.net/images/liberalarts/capstones/hunter/1454363445.v7.jpg",
//     "address":"695 Park Ave, New York, NY 10065",
//     "cstudents":[]
//     },
//     {
//     "id": 2,
//     "name": "BARUCH COLLEGE",
//     "imageUrl": "https://specials-images.forbesimg.com/imageserve/55ae7abce4b05c2c343212c1/300x300.jpg?fit=scale&background=000000",
//     "address":"695 Park Ave, New York, NY 10065",
//     "cstudents":[]
//     },
//     {
//         "id": 3,
//         "name": "FAKE HUNTER COLLEGE",
//         "imageUrl": "https://d32ogoqmya1dw8.cloudfront.net/images/liberalarts/capstones/hunter/1454363445.v7.jpg",
//         "address":"695 Park Ave, New York, NY 10065",
//         "cstudents":[]
        
//     },
//     {
//         "id": 4,
//         "name": "BETTER HUNTER COLLEGE",
//         "imageUrl": "https://d32ogoqmya1dw8.cloudfront.net/images/liberalarts/capstones/hunter/1454363445.v7.jpg",
//         "address":"695 Park Ave, New York, NY 10065",
//         "cstudents":[]
//     },
//     {
//         "id": 5,
//         "name": "ANTI SOCIAL COLLEGE",
//         "imageUrl": "https://d32ogoqmya1dw8.cloudfront.net/images/liberalarts/capstones/hunter/1454363445.v7.jpg",
//         "address":"695 Park Ave, New York, NY 10065",
//         "cstudents":[]
        
//     }
// ]

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

    res.status(200).json(playersOfTeam);
});

// router.post("/", (req, res, next) => {
//     let newCampus = req.body;
//     campuses.push(newCampus);
//     res.send(newCampus);
//   })
  
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