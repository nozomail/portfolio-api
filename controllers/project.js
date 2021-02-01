const Project = require("../models/project");

exports.getAllProjects = (_, res, next) => {
  Project.find({}, (error, project) => {
    if (error) return next(error);
    res.status(200).json(project);
  });
};

exports.getProject = (req, res, next) => {
  Project.findById(req.params.id, (error, project) => {
    if (error) return next(error);
    res.status(200).json(project);
  });
};

exports.createProject = (req, res, next) => {
  const project = new Project({
    title: req.body.title,
    roles: req.body.roles,
    tools: req.body.tools,
    img: req.body.img,
    body: req.body.body,
  });

  project.save((error) => {
    if (error) return next(error);
    res.status(201).send("Project created!");
  });
};

exports.updateProject = (req, res, next) => {
  Project.findByIdAndUpdate(req.params.id, { $set: req.body }, (error, project) => {
    if (error) return next(error);
    res.status(200).send("Project updated!");
  });
};

exports.deleteProject = (req, res, next) => {
  Project.findByIdAndRemove(req.params.id, { $set: req.body }, (error, project) => {
    if (error) return next(error);
    res.status(200).send("Project deleted!");
  });
};
