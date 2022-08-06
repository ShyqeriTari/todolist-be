import { Router } from "express";
import {
    Todo,
    User,
  } from "../../db/models/index.js";
  import { JWTAuthMiddleware } from "../../auth/JWTMiddleware.js"

  const todosRouter = Router();

  todosRouter.post("/", JWTAuthMiddleware,  async (req, res, next) => {
    try {
      const newNote = await Todo.create(req.body);
      res.send(newNote);
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

  export default todosRouter;