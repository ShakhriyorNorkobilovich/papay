const express = require("express");
const router = express.Router();
const memberController = require("./controllers/memberController");
const productController = require("./controllers/productController");


/********************
 *     REST API     *
 ********************/

// member related routers
router.post("/signup", memberController.signup);
router.post("/login", memberController.login);
router.get("/logout", memberController.logout);
router.get("/check-me", memberController.checkMyAuthentication);
router.get(
  "/member/:id",
  memberController.retrieveAuthMember,
  memberController.getChosenMember
);

// Product related routers

router.post(
  "/products",
  memberController.retrieveAuthMember,
  productController.getAllProducts
);

// Change the method to GET
router.get(
    "/products/:id",
    memberController.retrieveAuthMember,
    productController.getChosenProduct
  );
  



module.exports = router;