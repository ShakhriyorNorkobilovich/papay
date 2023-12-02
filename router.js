const express = require("express");
const router = express.Router();
const memberController = require ("./controllers/memberController");
const productController = require('./controllers/productController');


/****************************
*         REST API          *
*****************************/



//memberga dahldor routerlar
router.post("/signup", memberController.signup);
router.post("/login", memberController.login);
router.get("/logout", memberController.logout);
router.get("/check-me", memberController.checkMyAuthentication);
router.get("/member/:id", memberController.getChosenMember);


//boshqa routerlar
router.get("/menu", (req,res) => {
    res.send("Menu sahifasidasiz");
});

router.get("/community", (req, res) => {
    res.send("Jamiyat sahifasidasiz");
});

router.get("/products/:id", 
memberController.retrieveAuthMember, 
productController.getChosenProduct
);

module.exports = router;