const { Router } = require("express");
const charactersRouter = require("./charRouter")
const moviesRouter = require("./moviesRouter")

const router = Router();

router.use("/characters", charactersRouter);
router.use("/movies", moviesRouter);

module.exports = router;