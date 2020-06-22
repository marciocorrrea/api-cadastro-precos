const express = require("express");
const routes = express.Router();
const PrecoItemController = require("../controllers/ItemPrecosController");
const Authenticate = require("../middlewares/Authenticate");

routes.post("/", Authenticate.checkJWT, PrecoItemController.create);
routes.get("/:id?", Authenticate.checkJWT, PrecoItemController.find);
routes.put("/:id", Authenticate.checkJWT, PrecoItemController.update);
routes.patch("/:id", Authenticate.checkJWT, PrecoItemController.update);
routes.delete("/:id", Authenticate.checkJWT, PrecoItemController.delete);

module.exports = routes;
