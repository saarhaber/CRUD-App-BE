const router = require("express").Router();

const campuses = [
    {
    "id": 1,
    "name": "HUNTER COLLEGE",
    "imageUrl": "https://d32ogoqmya1dw8.cloudfront.net/images/liberalarts/capstones/hunter/1454363445.v7.jpg",
    "address":"695 Park Ave, New York, NY 10065",
    "cstudents":[]
    },
    {
    "id": 2,
    "name": "BARUCH COLLEGE",
    "imageUrl": "https://specials-images.forbesimg.com/imageserve/55ae7abce4b05c2c343212c1/300x300.jpg?fit=scale&background=000000",
    "address":"695 Park Ave, New York, NY 10065",
    "cstudents":[]
    },
    {
        "id": 3,
        "name": "FAKE HUNTER COLLEGE",
        "imageUrl": "https://d32ogoqmya1dw8.cloudfront.net/images/liberalarts/capstones/hunter/1454363445.v7.jpg",
        "address":"695 Park Ave, New York, NY 10065",
        "cstudents":[]
        
    },
    {
        "id": 4,
        "name": "BETTER HUNTER COLLEGE",
        "imageUrl": "https://d32ogoqmya1dw8.cloudfront.net/images/liberalarts/capstones/hunter/1454363445.v7.jpg",
        "address":"695 Park Ave, New York, NY 10065",
        "cstudents":[]
    },
    {
        "id": 5,
        "name": "ANTI SOCIAL COLLEGE",
        "imageUrl": "https://d32ogoqmya1dw8.cloudfront.net/images/liberalarts/capstones/hunter/1454363445.v7.jpg",
        "address":"695 Park Ave, New York, NY 10065",
        "cstudents":[]
        
    }
]

router.get("/", (req, res, next) => {
    res.status(200).send(campuses);
});

module.exports = router;