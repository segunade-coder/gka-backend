import { Router } from "express";
import {
  addEvents,
  addFaqs,
  addLikes,
  addNewAbout,
  addNewNews,
  addNewSlider,
  addReview,
  addStudentToList,
  addToGallery,
  addViews,
  changeReviewStatus,
  contactUs,
  deleteAbout,
  deleteAdmissionList,
  deleteEvent,
  deleteFaq,
  deleteGallery,
  deleteMessage,
  deleteNews,
  deleteReview,
  deleteSlider,
  editAbout,
  editAdmissionList,
  editEvents,
  editFaq,
  editGallery,
  editHistory,
  editNews,
  editSlider,
  getAboutSection,
  getAdmissionList,
  getAll,
  getEvents,
  getFaqs,
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
  .all(checkAuth)
  .get(rootErrorHandler(getSliderSection))
  .post(
    uploadImage.single("image"),
    optimizeImage,
    rootErrorHandler(addNewSlider)
  );
router
  .route("/slider/:id")
  .all(checkAuth)
  .delete(rootErrorHandler(deleteSlider))
  .put(
    [uploadImage.single("image"), optionalOptimizeImage],
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
  .all(checkAuth)
  .get(rootErrorHandler(getHistorySection))
  .put(rootErrorHandler(editHistory));
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
router
  .route("/faqs")
  .get(rootErrorHandler(getFaqs))
  .post(checkAuth, rootErrorHandler(addFaqs));

router
  .route("/faq/:id")
  .all(checkAuth)
  .put(rootErrorHandler(editFaq))
  .delete(rootErrorHandler(deleteFaq));

router
  .route("/admission-list")
  .get(rootErrorHandler(getAdmissionList))
  .post(checkAuth, rootErrorHandler(addStudentToList));
router
  .route("/admission-list/:id")
  .all(checkAuth)
  .put(rootErrorHandler(editAdmissionList))
  .delete(rootErrorHandler(deleteAdmissionList));
export { router as dashboardRoute };
