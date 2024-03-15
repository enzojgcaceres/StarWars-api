const { Router } = require("express")

// importar funciones manejadoras

const charactersRouter = Router();

charactersRouter.get("/", charHandler);

charactersRouter.get("/:id", charHandler);

charactersRouter.post("/", createCharHandler);

module.exports = charactersRouter;