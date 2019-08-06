const router = require("express").Router();
const campusesRouter = require("./campuses");

router.use("/campuses", campusesRouter); 
//router.use("/students", studentRouter);
module.exports = router;