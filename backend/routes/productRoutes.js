const express = require("express");
const router = express.Router();

router.route("/products").get(getProducts);
router.route("/products/create").post(newProduct);
router
  .route("/products/:id")
  .get(getSingleProduct)
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router;
