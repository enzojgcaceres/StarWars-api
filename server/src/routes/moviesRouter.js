const { Router } = require("express")

const { getAllFilms } = require("../handlers/")

const moviesRouter = Router()

moviesRouter.get("/", getAllFilms)

module.exports = moviesRouter