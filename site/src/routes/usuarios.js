var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/alertas", function (req, res) {
    usuarioController.alertas(req, res);
});

router.get("/listar2", function (req, res) {
    usuarioController.listar2(req, res);
});

router.get("/entrar2", function (req, res) {
    usuarioController.entrar2(req, res);
});

router.get("/listar3", function (req, res) {
    usuarioController.listar3(req, res);
});

router.get("/listarMaq", function (req, res) {
    usuarioController.listarMaq(req, res);
});

module.exports = router;