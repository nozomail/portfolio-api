const About = require("../models/about");

exports.getAbout = (_, res, next) => {
  About.find({}, (error, about) => {
    if (error) return next(error);
    res.status(200).json(about);
  });
};

exports.updateAbout = (req, res, next) => {
  const about = new About({
    img: req.body.img,
    text: req.body.text,
    tools: req.body.tools,
  });

  about.save((error) => {
    if (error) return next(error);
    res.status(201).send("About updated!");
  });
};
