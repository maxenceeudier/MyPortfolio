//import { Request, Response} from 'express';

const express = require("express");
const router = express.Router();

const ProjectObject = require("../models/projects");

const SERVER_ERROR = "SERVER_ERROR";

router.get("/", async (_, res) => {
  try {
    const data = await ProjectObject.find();
    return res.status(200).send({ ok: true, data });
  } catch (error) {
    console.log(error);
    res.status(500).send({ ok: false, code: SERVER_ERROR, error });
  }
});

module.exports = router;