var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idVoto", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.post("/Verificar", function (req, res) {
    medidaController.Verificar(req, res);
});

router.post("/cadastrar", function (req, res) {
    medidaController.cadastrar(req, res);
});
// router.get("/tempo-real/:idAquario", function (req, res) {
//     medidaController.buscarMedidasEmTempoReal(req, res);
// })

module.exports = router;