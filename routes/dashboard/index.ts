import { Router } from "express";
import {
  addEvents,
  addLikes,
  addNewAbout,
  addNewNews,
  addNewSlider,
  addReview,
  addToGallery,
  addViews,
  changeReviewStatus,
  contactUs,
  deleteAbout,
  deleteEvent,
  deleteGallery,
  deleteMessage,
  deleteNews,
  deleteReview,
  deleteSlider,
  editAbout,
  editEvents,
  editGallery,
  editHistory,
  editNews,
  editSlider,
  getAboutSection,
  getAll,
  getEvents,
  getGallerySection,
  getHistorySection,
  getMessages,
  getNewsById,
  getNewsSection,
  getReviews,
  getSliderSection,
} from "../../controllers/dashboard";
import { rootErrorHandler } from "../../middlewares/root-error-handler";
import {
  optimizeImage,
  optimizeImages,
  optionalOptimizeImage,
} from "../../middlewares/processImage";
import { uploadImage } from "../../config/configOptions";
import { checkAuth } from "../../middlewares/auth";

const router = Router();
router.get("/", rootErrorHandler(getAll));
router
  .route("/slider")
  .get(checkAuth, rootErrorHandler(getSliderSection))
  .post(
    checkAuth,
    uploadImage.single("image"),
    optimizeImage,
    rootErrorHandler(addNewSlider)
  );
router
  .route("/slider/:id")
  .delete(checkAuth, rootErrorHandler(deleteSlider))
  .put(
    [checkAuth, uploadImage.single("image"), optionalOptimizeImage],
    rootErrorHandler(editSlider)
  );
router
  .route("/about")
  .get(checkAuth, rootErrorHandler(getAboutSection))
  .post(
    checkAuth,
    uploadImage.single("image"),
    optimizeImage,
    rootErrorHandler(addNewAbout)
  );
router
  .route("/about/:id")
  .delete(checkAuth, rootErrorHandler(deleteAbout))
  .put(
    [checkAuth, uploadImage.single("image"), optionalOptimizeImage],
    rootErrorHandler(editAbout)
  );
router
  .route("/history")
  .get(checkAuth, rootErrorHandler(getHistorySection))
  .put(checkAuth, rootErrorHandler(editHistory));
router
  .route("/gallery")
  .get(rootErrorHandler(getGallerySection))
  .post(
    [checkAuth, uploadImage.array("image"), optimizeImages],
    rootErrorHandler(addToGallery)
  );
router
  .route("/gallery/:id")
  .delete(checkAuth, rootErrorHandler(deleteGallery))
  .put(
    [checkAuth, uploadImage.single("image"), optimizeImage],
    rootErrorHandler(editGallery)
  );
router
  .route("/news")
  .get(rootErrorHandler(getNewsSection))
  .post(
    [checkAuth, uploadImage.single("image"), optionalOptimizeImage],
    rootErrorHandler(addNewNews)
  );
router
  .route("/news/:id")
  .get(rootErrorHandler(getNewsById))
  .delete(checkAuth, rootErrorHandler(deleteNews))
  .put(
    [checkAuth, uploadImage.single("image"), optionalOptimizeImage],
    rootErrorHandler(editNews)
  );
router.put("/news/:id/views", rootErrorHandler(addViews));
router.put("/news/:id/likes", rootErrorHandler(addLikes));
router.get("/reviews", rootErrorHandler(getReviews));
router
  .route("/events")
  .get(rootErrorHandler(getEvents))
  .post(
    [checkAuth, uploadImage.single("image"), optimizeImage],
    rootErrorHandler(addEvents)
  );
router
  .route("/events/:id")
  .put(
    [checkAuth, uploadImage.single("image"), optionalOptimizeImage],
    rootErrorHandler(editEvents)
  )
  .delete(checkAuth, rootErrorHandler(deleteEvent));
router.post("/reviews", rootErrorHandler(addReview));
router.post("/contact-us", rootErrorHandler(contactUs));
router.get("/messages", rootErrorHandler(getMessages));
router
  .route("/reviews/:id")
  .delete(checkAuth, rootErrorHandler(deleteReview))
  .put(checkAuth, rootErrorHandler(changeReviewStatus));
router.delete("/messages/:id", checkAuth, rootErrorHandler(deleteMessage));

export { router as dashboardRoute };
