import { Request, Response } from "express";
import {
  getAboutContent,
  getHeroContent,
  getHistoryContent,
  returnJSONSuccess,
  getNewsContent,
  getGalleryContent,
  getSliderContent,
  getEvent,
} from "../utils/functions";
import {
  addNewSliderValidate,
  addReviews,
  validateContact,
  validateHistory,
  validateNewsPost,
  validateParamId,
  validateReview,
  validateReviewStatus,
} from "../schemas";
import { deleteUnusedImage } from "../middlewares/processImage";
import db from "../utils/mysqlApi";

/* Begining of GET requests */
export const getAll = async (req: Request, res: Response) => {
  return returnJSONSuccess(res, {
    data: {
      hero: await getHeroContent(),
      slider: await getSliderContent(),
      about: await getAboutContent(),
      history: await getHistoryContent(),
      gallery: await getGalleryContent(9),
      news: await getNewsContent(true, 3),
      events: await getEvent(5, true),
    },
  });
};
export const getSliderSection = async (req: Request, res: Response) => {
  return returnJSONSuccess(res, {
    data: await getSliderContent(),
  });
};
export const getHeroSection = async (req: Request, res: Response) => {
  return returnJSONSuccess(res, {
    data: await getHeroContent(),
  });
};
export const getAboutSection = async (req: Request, res: Response) => {
  return returnJSONSuccess(res, {
    data: await getAboutContent(),
  });
};
export const getHistorySection = async (req: Request, res: Response) => {
  return returnJSONSuccess(res, {
    data: await getHistoryContent(),
  });
};
export const getGallerySection = async (req: Request, res: Response) => {
  return returnJSONSuccess(res, {
    data: await getGalleryContent(),
  });
};
export const getNewsSection = async (req: Request, res: Response) => {
  return returnJSONSuccess(res, {
    data: await getNewsContent(false),
  });
};
export const getNewsById = async (req: Request, res: Response) => {
  const id = validateParamId.parse(req.params.id);
  const query = "SELECT * FROM news WHERE id = ? LIMIT 1";
  const data = await db.queryString(query, [id]);
  return returnJSONSuccess(res, { data: data[0] });
};
export const getEvents = async (req: Request, res: Response) => {
  const query = "SELECT * FROM events ORDER BY date ASC";
  const data = await db.query(query);
  return returnJSONSuccess(res, {
    data,
  });
};
export const getReviews = async (req: Request, res: Response) => {
  const query = "SELECT * FROM reviews WHERE publish = 1";
  const data = await db.query(query);
  const newReview: {}[][] = [];
  let temp4: {}[] = [];
  data.map((review, i) => {
    if (temp4.length === 4) {
      newReview.push(temp4);
      temp4 = [];
    }
    temp4.push(review);
  });
  temp4.length > 0 && newReview.push(temp4);
  return returnJSONSuccess(res, { data: newReview });
};
export const getMessages = async (req: Request, res: Response) => {
  const messages = await db.query("SELECT * FROM messages");
  const reviews = await db.query("SELECT * FROM reviews");

  return returnJSONSuccess(res, {
    data: {
      messages,
      reviews,
    },
  });
};
/* End of GET requests */

/* Begining of POST requests */

export const addNewSlider = async (req: Request, res: Response) => {
  const validated = addNewSliderValidate.parse(req.body);
  const data = {
    sliderSubText: validated.sub,
    sliderText: validated.title,
    image: req.file?.filename as string,
  };

  await db.insert("slider", data);
  return returnJSONSuccess(res);
};
export const addNewAbout = async (req: Request, res: Response) => {
  const validated = addNewSliderValidate.parse(req.body);

  const data = {
    subTitle: validated.sub,
    title: validated.title,
    image: req.file?.filename as string,
  };

  await db.insert("about", data);
  return returnJSONSuccess(res);
};
export const addToGallery = async (req: Request, res: Response) => {
  const images = req.files as Express.Multer.File[];
  const data = Array.from(images).map((img) => ({
    image: img.filename,
  }));

  await Promise.all(data.map((imgData) => db.insert("gallery", imgData)));
  return returnJSONSuccess(res);
};
export const addNewNews = async (req: Request, res: Response) => {
  const validated = validateNewsPost.parse(req.body);
  const data = {
    body: validated.body,
    title: validated.title,
    publish: validated.publish === "true" ? 1 : 0,
    likes: 0,
    views: 0,
    edited: false,
    image: (req.file?.filename as string) || "",
  };

  await db.insert("news", data);
  return returnJSONSuccess(res);
};
export const addViews = async (req: Request, res: Response) => {
  const id = validateParamId.parse(req.params.id);
  const query = "UPDATE news SET views = views + 1 WHERE id = ?";
  await db.queryString(query, [id]);

  return returnJSONSuccess(res);
};
export const addLikes = async (req: Request, res: Response) => {
  const id = validateParamId.parse(req.params.id);
  const value = req.body.like as boolean;
  const action = value ? 1 : -1;

  const query = "UPDATE news SET likes = likes + ? WHERE id = ?";
  await db.queryString(query, [action, id]);
  return returnJSONSuccess(res);
};
export const addReview = async (req: Request, res: Response) => {
  const validated = validateReview.parse(req.body);

  await db.insert("reviews", validated);
  return returnJSONSuccess(res);
};
export const addEvents = async (req: Request, res: Response) => {
  const validated = addReviews.parse(req.body);
  const data = {
    title: validated.title,
    body: validated.body,
    date: new Date(validated.date),
    location: validated.location,
    image: (req.file?.filename as string) || "",
  };

  await db.insert("events", data);
  return returnJSONSuccess(res);
};
export const contactUs = async (req: Request, res: Response) => {
  const validated = validateContact.parse(req.body);

  await db.insert("messages", validated);

  return returnJSONSuccess(res);
};
/* End of POST requests */

/* Begining of PUT requests */

export const editSlider = async (req: Request, res: Response) => {
  const id = validateParamId.parse(req.params.id);
  const validated = addNewSliderValidate.parse(req.body);
  const image = req.file ? { image: req.file.filename as string } : {};

  const prevImageQuery = "SELECT image FROM slider WHERE id = ? LIMIT 1";
  const prevImageResult = await db.queryString(prevImageQuery, [id]);
  const prevImage = prevImageResult[0];
  const updateQuery = `
      UPDATE slider
      SET sliderSubText = ?, sliderText = ?, ${
        image.image ? "image = ?," : ""
      } updatedAt = NOW()
      WHERE id = ?
  `;
  const updateParams = [
    validated.sub,
    validated.title,
    ...(image.image ? [image.image] : []),
    id,
  ];
  await db.queryString(updateQuery, updateParams);

  if (image.image) deleteUnusedImage(prevImage);

  return returnJSONSuccess(res);
};
export const editAbout = async (req: Request, res: Response) => {
  const id = validateParamId.parse(req.params.id);
  const validated = addNewSliderValidate.parse(req.body);
  const image = req.file ? { image: req.file.filename as string } : {};

  const prevImageQuery = "SELECT image FROM about WHERE id = ? LIMIT 1";
  const prevImageResult = await db.queryString(prevImageQuery, [id]);
  const prevImage = prevImageResult[0];

  const updateQuery = `
      UPDATE about
      SET subTitle = ?, title = ?, ${
        image.image ? "image = ?," : ""
      } updatedAt = NOW()
      WHERE id = ?
  `;
  const updateParams = [
    validated.sub,
    validated.title,
    ...(image.image ? [image.image] : []),
    id,
  ];
  await db.queryString(updateQuery, updateParams);

  if (image.image) deleteUnusedImage(prevImage);

  return returnJSONSuccess(res);
};
export const editHistory = async (req: Request, res: Response) => {
  const { id, history, years } = validateHistory.parse(req.body);

  const updateQuery = `
      UPDATE history
      SET text = ?, yearsInService = ?, updatedAt = NOW()
      WHERE id = ?
  `;
  const updateParams = [history, years, id];
  await db.queryString(updateQuery, updateParams);

  return returnJSONSuccess(res);
};
export const editGallery = async (req: Request, res: Response) => {
  const id = validateParamId.parse(req.params.id);

  const prevImageQuery = "SELECT image FROM gallery WHERE id = ? LIMIT 1";
  const prevImageResult = await db.queryString(prevImageQuery, [id]);
  const prevImage = prevImageResult[0];

  const updateQuery = `
      UPDATE gallery
      SET image = ?, updatedAt = NOW()
      WHERE id = ?
  `;
  const updateParams = [req.file?.filename, id];
  await db.queryString(updateQuery, updateParams);

  deleteUnusedImage(prevImage);

  return returnJSONSuccess(res);
};
export const editNews = async (req: Request, res: Response) => {
  const validated = validateNewsPost.parse(req.body);
  const id = validateParamId.parse(req.params.id);
  const image = req.file ? { image: req.file.filename as string } : {};

  const prevImageQuery = "SELECT image FROM news WHERE id = ? LIMIT 1";
  const prevImageResult = await db.queryString(prevImageQuery, [id]);
  const prevImage = prevImageResult[0];

  const updateQuery = `
      UPDATE news
      SET body = ?, title = ?, publish = ?, edited = true, ${
        image.image ? "image = ?," : ""
      } updatedAt = NOW()
      WHERE id = ?
  `;
  const updateParams = [
    validated.body,
    validated.title,
    validated.publish === "true" ? 1 : 0,
    ...(image.image ? [image.image] : []),
    id,
  ];
  await db.queryString(updateQuery, updateParams);

  if (image.image) deleteUnusedImage(prevImage);

  return returnJSONSuccess(res);
};
export const editEvents = async (req: Request, res: Response) => {
  const id = validateParamId.parse(req.params.id);
  const validated = addReviews.parse(req.body);
  const image = req.file ? { image: req.file.filename as string } : {};

  const prevImageQuery = "SELECT image FROM events WHERE id = ? LIMIT 1";
  const prevImageResult = await db.queryString(prevImageQuery, [id]);
  const prevImage = prevImageResult[0];

  const updateQuery = `
            UPDATE events
            SET title = ?, body = ?, date = ?, location = ?, ${
              image.image ? "image = ?," : ""
            } updatedAt = NOW()
            WHERE id = ?
        `;
  const updateParams = [
    validated.title,
    validated.body,
    new Date(validated.date),
    validated.location,
    ...(image.image ? [image.image] : []),
    id,
  ];
  await db.queryString(updateQuery, updateParams);

  if (image.image) deleteUnusedImage(prevImage);

  return returnJSONSuccess(res);
};
export const changeReviewStatus = async (req: Request, res: Response) => {
  const id = validateParamId.parse(req.params.id);
  const validated = validateReviewStatus.parse(req.body);

  const publishValue = validated.publish ? 1 : 0;

  const updateQuery = `
      UPDATE reviews
      SET publish = ?
      WHERE id = ?
  `;
  const updateParams = [publishValue, id];
  await db.queryString(updateQuery, updateParams);

  return returnJSONSuccess(res);
};
/* End of PUT requests */

/* Begining of DELETE requests */

export const deleteGallery = async (req: Request, res: Response) => {
  const id = validateParamId.parse(req.params.id);
  const prevImageQuery = "SELECT image FROM gallery WHERE id = ? LIMIT 1";
  const prevImageResult = await db.queryString(prevImageQuery, [id]);
  const prevImage = prevImageResult[0];

  const deleteQuery = "DELETE FROM gallery WHERE id = ?";
  await db.queryString(deleteQuery, [id]);

  deleteUnusedImage(prevImage);
  return returnJSONSuccess(res);
};
export const deleteSlider = async (req: Request, res: Response) => {
  const id = validateParamId.parse(req.params.id);

  const prevImageQuery = "SELECT image FROM slider WHERE id = ? LIMIT 1";
  const prevImageResult = await db.queryString(prevImageQuery, [id]);
  const prevImage = prevImageResult[0];

  const deleteQuery = "DELETE FROM slider WHERE id = ?";
  await db.queryString(deleteQuery, [id]);

  deleteUnusedImage(prevImage);
  return returnJSONSuccess(res);
};
export const deleteAbout = async (req: Request, res: Response) => {
  const id = validateParamId.parse(req.params.id);

  const prevImageQuery = "SELECT image FROM about WHERE id = ? LIMIT 1";
  const prevImageResult = await db.queryString(prevImageQuery, [id]);
  const prevImage = prevImageResult[0];

  const deleteQuery = "DELETE FROM about WHERE id = ?";
  await db.queryString(deleteQuery, [id]);

  deleteUnusedImage(prevImage);
  return returnJSONSuccess(res);
};
export const deleteNews = async (req: Request, res: Response) => {
  const id = validateParamId.parse(req.params.id);

  const prevImageQuery = "SELECT image FROM news WHERE id = ? LIMIT 1";
  const prevImageResult = await db.queryString(prevImageQuery, [id]);
  const prevImage = prevImageResult[0];

  const deleteQuery = "DELETE FROM news WHERE id = ?";
  await db.queryString(deleteQuery, [id]);

  deleteUnusedImage(prevImage);
  return returnJSONSuccess(res);
};
export const deleteEvent = async (req: Request, res: Response) => {
  const id = validateParamId.parse(req.params.id);

  const prevImageQuery = "SELECT image FROM events WHERE id = ? LIMIT 1";
  const prevImageResult = await db.queryString(prevImageQuery, [id]);
  const prevImage = prevImageResult[0];

  const deleteQuery = "DELETE FROM events WHERE id = ?";
  await db.queryString(deleteQuery, [id]);

  deleteUnusedImage(prevImage);
  return returnJSONSuccess(res);
};
export const deleteReview = async (req: Request, res: Response) => {
  const id = validateParamId.parse(req.params.id);

  const deleteQuery = "DELETE FROM reviews WHERE id = ?";
  await db.queryString(deleteQuery, [id]);

  return returnJSONSuccess(res);
};
export const deleteMessage = async (req: Request, res: Response) => {
  const id = validateParamId.parse(req.params.id);

  const deleteQuery = "DELETE FROM messages WHERE id = ?";
  await db.queryString(deleteQuery, [id]);

  return returnJSONSuccess(res);
};
/* End of DELETE requests */
