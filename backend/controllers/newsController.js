const News = require("../models/News");
const mongoose = require("mongoose");

const newsController = {
  index: async (req, res) => {
    // http://localhost:5000/api/news?page=1
    let page = req.query.page;
    let limit = 5;

    let news = await News.find()
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 });

    let totalNewsCount = await News.countDocuments();   //total count
    let totalPageCount = Math.ceil(totalNewsCount/limit)  // 11/5 =2.2 => 3

    let dataLink = {
      previousPage: page == 1 ? false : true,
      nextPage: totalPageCount == page ? false : true,
      currentPage: page,
      loopLink: []
    };

    for(i = 0; i < totalPageCount ; i++){
      let number = i+1 ;
      dataLink.loopLink.push({ loopNumber : number })
    }

    let response = {
      dataLink : dataLink,
      data : news
    }

    return res.status(200).json(response);

    // const news = await News.find().sort({createdAt : -1})
    // return res.status(200).json(news);
  },
  store: async (req, res) => {
    const { title, description, author, type } = req.body;
    if (!title) {
      return res.status(400).json({ message: "title is required" });
    }
    if (!description) {
      return res.status(400).json({ message: "description is required" });
    }
    if (!author) {
      return res.status(400).json({ message: "author is required" });
    }
    if (!type) {
      return res.status(400).json({ message: "type is required" });
    }
    const news = await News.create({ title, description, author, type });
    return res.status(200).json(news); //db data
  },
  show: async (req, res) => {
    try {
      const id = req.params.id;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid Id..." });
      }
      const news = await News.findById(id);
      if (!news) {
        return res.status(400).json({ message: "News data is not found" });
      }
      return res.status(200).json(news);
    } catch (e) {
      return res.status(400).json({ message: "Internal server error..." });
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid id..." });
      }
      let news = await News.findByIdAndDelete(id);

      if (!news) {
        return res.status(400).json({ message: "There is no news...." });
      }

      return res.status(200).json({
        data: news,
        message: "delete success...",
      });
    } catch (e) {
      return res.status(400).json({ message: "Internal server error...." });
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "invalid Id ..." });
      }

      const news = await News.findByIdAndUpdate(id, { ...req.body });
      if (!news) {
        return res.status(400).json({ message: "there is no news" });
      }
      let updateNews = await News.findById(id);
      return res.status(200).json({
        data: updateNews,
        message: "update success...",
      });
    } catch (e) {
      return res.status(400).json({ message: "Internal server error" });
    }
  },
};

module.exports = newsController;
