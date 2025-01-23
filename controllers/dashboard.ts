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
import { prisma } from "../prisma";
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
export const deleteSlider = async (req: Request, res: Response) => {
  const id = validateParamId.parse(req.params.id);
  await prisma.slider.delete({
    where: {
      id,
    },
  });
  return returnJSONSuccess(res);
};
export const deleteAbout = async (req: Request, res: Response) => {
  const id = validateParamId.parse(req.params.id);
  await prisma.about.delete({
    where: {
      id,
    },
  });
  return returnJSONSuccess(res);
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
export const addNewSlider = async (req: Request, res: Response) => {
  const validated = addNewSliderValidate.parse(req.body);
  await prisma.slider.create({
    data: {
      sliderSubText: validated.sub,
      sliderText: validated.title,
      image: req.file?.filename as string,
    },
  });
  return returnJSONSuccess(res);
};
export const addNewAbout = async (req: Request, res: Response) => {
  const validated = addNewSliderValidate.parse(req.body);
  await prisma.about.create({
    data: {
      subTitle: validated.sub,
      title: validated.title,
      image: req.file?.filename as string,
    },
  });
  return returnJSONSuccess(res);
};
export const editSlider = async (req: Request, res: Response) => {
  const id = validateParamId.parse(req.params.id);
  const validated = addNewSliderValidate.parse(req.body);
  const image = req.file ? { image: req.file.filename as string } : {};
  await prisma.slider.update({
    where: {
      id,
    },
    data: {
      sliderSubText: validated.sub,
      sliderText: validated.title,
      ...image,
    },
  });
  return returnJSONSuccess(res);
};
export const editAbout = async (req: Request, res: Response) => {
  const id = validateParamId.parse(req.params.id);
  const validated = addNewSliderValidate.parse(req.body);
  const image = req.file ? { image: req.file.filename as string } : {};
  await prisma.about.update({
    where: {
      id,
    },
    data: {
      subTitle: validated.sub,
      title: validated.title,
      ...image,
    },
  });
  return returnJSONSuccess(res);
};
export const editHistory = async (req: Request, res: Response) => {
  const { id, history, years } = validateHistory.parse(req.body);
  await prisma.history.update({
    where: {
      id,
    },
    data: {
      text: history,
      yearsInService: years,
    },
  });
  return returnJSONSuccess(res);
};
export const addToGallery = async (req: Request, res: Response) => {
  const images = req.files as Express.Multer.File[];
  await prisma.gallery.createMany({
    data: Array.from(images).map((img) => {
      return {
        image: img.filename,
      };
    }),
  });
  return returnJSONSuccess(res);
};
export const editGallery = async (req: Request, res: Response) => {
  const id = validateParamId.parse(req.params.id);
  await prisma.gallery.update({
    where: {
      id,
    },
    data: {
      image: req.file?.filename,
    },
  });
  return returnJSONSuccess(res);
};
export const deleteGallery = async (req: Request, res: Response) => {
  const id = validateParamId.parse(req.params.id);
  await prisma.gallery.delete({
    where: {
      id,
    },
  });
  return returnJSONSuccess(res);
};
export const addNewNews = async (req: Request, res: Response) => {
  const validated = validateNewsPost.parse(req.body);
  await prisma.news.create({
    data: {
      body: validated.body,
      title: validated.title,
      publish: validated.publish === "true" ? true : false,
      likes: 0,
      views: 0,
      edited: false,
      image: (req.file?.filename as string) || "",
    },
  });
  return returnJSONSuccess(res);
};
export const editNews = async (req: Request, res: Response) => {
  const validated = validateNewsPost.parse(req.body);
  const id = validateParamId.parse(req.params.id);
  const image = req.file ? { image: req.file.filename as string } : {};
  await prisma.news.update({
    where: {
      id,
    },
    data: {
      body: validated.body,
      title: validated.title,
      publish: validated.publish === "true" ? true : false,
      edited: true,
      ...image,
    },
  });
  return returnJSONSuccess(res);
};
export const deleteNews = async (req: Request, res: Response) => {
  const id = validateParamId.parse(req.params.id);
  await prisma.news.delete({
    where: {
      id,
    },
  });
  return returnJSONSuccess(res);
};
export const deleteEvent = async (req: Request, res: Response) => {
  const id = validateParamId.parse(req.params.id);
  await prisma.events.delete({
    where: {
      id,
    },
  });
  return returnJSONSuccess(res);
};
export const getNewsById = async (req: Request, res: Response) => {
  const id = validateParamId.parse(req.params.id);
  const data = await prisma.news.findFirst({
    where: {
      id,
    },
  });
  return returnJSONSuccess(res, { data });
};
export const addViews = async (req: Request, res: Response) => {
  const id = validateParamId.parse(req.params.id);
  const data = await prisma.news.update({
    where: {
      id,
    },
    data: {
      views: {
        increment: 1,
      },
    },
  });
  return returnJSONSuccess(res, { data });
};
export const addLikes = async (req: Request, res: Response) => {
  const id = validateParamId.parse(req.params.id);
  const value = req.body.like as boolean;
  let action = value ? { increment: 1 } : { decrement: 1 };
  const data = await prisma.news.update({
    where: {
      id,
    },
    data: {
      likes: {
        ...action,
      },
    },
  });
  return returnJSONSuccess(res, { data });
};
export const getEvents = async (req: Request, res: Response) => {
  const data = await prisma.events.findMany({
    orderBy: {
      date: "asc",
    },
  });
  return returnJSONSuccess(res, {
    data,
  });
};
export const getReviews = async (req: Request, res: Response) => {
  const data = await prisma.reviews.findMany({
    where: {
      publish: true,
    },
  });
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
export const addReview = async (req: Request, res: Response) => {
  const validated = validateReview.parse(req.body);

  await prisma.reviews.create({
    data: validated,
  });

  return returnJSONSuccess(res);
};
export const contactUs = async (req: Request, res: Response) => {
  const validated = validateContact.parse(req.body);

  await prisma.messages.create({
    data: validated,
  });

  return returnJSONSuccess(res);
};
export const addEvents = async (req: Request, res: Response) => {
  const validated = addReviews.parse(req.body);
  await prisma.events.create({
    data: {
      title: validated.title,
      body: validated.body,
      date: new Date(validated.date),
      location: validated.location,
      image: (req.file?.filename as string) || "",
    },
  });
  return returnJSONSuccess(res);
};
export const editEvents = async (req: Request, res: Response) => {
  const id = validateParamId.parse(req.params.id);
  const validated = addReviews.parse(req.body);
  const image = req.file ? { image: req.file.filename as string } : {};
  await prisma.events.update({
    where: {
      id,
    },
    data: {
      title: validated.title,
      body: validated.body,
      date: new Date(validated.date),
      location: validated.location,
      ...image,
    },
  });
  return returnJSONSuccess(res);
};
export const getMessages = async (req: Request, res: Response) => {
  const messages = await prisma.messages.findMany();
  const reviews = await prisma.reviews.findMany();

  return returnJSONSuccess(res, {
    data: {
      messages,
      reviews,
    },
  });
};
export const deleteReview = async (req: Request, res: Response) => {
  const id = validateParamId.parse(req.params.id);
  await prisma.reviews.delete({
    where: {
      id,
    },
  });
  return returnJSONSuccess(res);
};
export const deleteMessage = async (req: Request, res: Response) => {
  const id = validateParamId.parse(req.params.id);
  await prisma.messages.delete({
    where: {
      id,
    },
  });
  return returnJSONSuccess(res);
};
export const changeReviewStatus = async (req: Request, res: Response) => {
  const id = validateParamId.parse(req.params.id);
  const validated = validateReviewStatus.parse(req.body);

  await prisma.reviews.update({
    where: {
      id,
    },
    data: {
      publish: validated.publish,
    },
  });
  return returnJSONSuccess(res);
};
