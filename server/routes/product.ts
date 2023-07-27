import { Router } from "express";
import { param, query } from "express-validator";
import {
  getProducts,
  getProduct,
  searchProducts,
  createProduct,
  checkFileType,
  saveImagesToDisk,
} from "../controllers/product.js";
import { uploadToBuffer } from "../middleware/multer.js";
import * as validator from "../middleware/validator.js";

const router = Router();
/**
   * @openapi
   * /api/1.0/products:
   *  get:
   *    tags:
   *    - Products
   *    description: get all products
   *    responses: 
   *      200:
   *        description: all
*/
router.route("/products").get(getProducts);
/**
   * @openapi
   * /api/1.0/products/search:
   *  get:
   *    tags:
   *    - Products
   *    description: Product object of search keyword
   *    parameters:
   *    - in: query
   *      name: keyword
   *      schema:
   *        type: string
   *      required: true
   *    - in: query
   *      name: paging
   *      schema:
   *        type: integer
   *      description: Paging for request next page.
   *    responses: 
   *      200:
   *        description: Array of Product Object.
   *      400:
   *        description: Error message.
*/
router
  .route("/products/search")
  .get(
    query("keyword").not().isEmpty().trim(),
    query("paging").if(query("paging").exists()).isInt(),
    validator.handleResult,
    searchProducts
  );
/**
   * @openapi
   * /api/1.0/products/details:
   *  get:
   *    tags:
   *    - Products
   *    description: Product object of specific products
   *    parameters:
   *    - in: query
   *      name: Product ID
   *      schema:
   *        type: integer
   *      required: true
   *    responses: 
   *      200:
   *        description: Single Product Information.
   *      400:
   *        description: Error message.
   *      500: 
   *        description: Server Error.
*/
router
  .route("/products/details")
  .get(query("id").not().isEmpty().trim(), validator.handleResult, getProduct);
/**
   * @openapi
   * /api/1.0/products/{category}:
   *  get:
   *    tags:
   *    - Products
   *    description: Product object of specific products
   *    parameters:
   *    - in: path
   *      name: category
   *      require: true
   *    - in: query
   *      name: paging
   *      schema:
   *        type: integer
   *    responses: 
   *      200:
   *        description: Single Product Information.
   *      400:
   *        description: Error message.
   *      500: 
   *        description: Server Error.
*/
router
  .route("/products/:category")
  .get(
    param("category").isIn(["all", "men", "women", "accessories"]),
    query("paging").if(query("paging").exists()).isInt(),
    validator.handleResult,
    getProducts
  );

router.route("/product").post(
  uploadToBuffer.fields([
    { name: "main_image", maxCount: 1 },
    { name: "images", maxCount: 5 },
  ]),
  checkFileType,
  saveImagesToDisk,
  createProduct
);

export default router;
