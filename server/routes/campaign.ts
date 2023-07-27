import { Router } from "express";
import {
  getCampaigns,
  checkProductExist,
  createCampaign,
} from "../controllers/campaign.js";
import { uploadToDisk } from "../middleware/multer.js";

const router = Router();
/**
   * @openapi
   * /api/1.0/marketing/campaigns:
   *  get:
   *    tags:
   *    - Marketing
   *    description: get marketing campaigns
   *    responses: 
   *      200:
   *        description: Array of Campaign Object.
   *      500:
   *        description: Sever Error. Error message.
   *      
*/
router.route("/marketing/campaigns").get(getCampaigns);

router
  .route("/marketing/campaigns")
  .post(
    uploadToDisk.single("campaign_picture"),
    checkProductExist,
    createCampaign
  );

export default router;
