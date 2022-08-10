import { Router } from "express";
import {
    Todo,
  } from "../../db/models/index.js";
  import { JWTAuthMiddleware } from "../../auth/JWTMiddleware.js"

  const todosRouter = Router();

  todosRouter.post("/", JWTAuthMiddleware,  async (req, res, next) => {
    try {
      const newNote = await Todo.create(req.body);
      res.status(201).send(newNote);
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

    todosRouter.get("/:userId", JWTAuthMiddleware, async (req, res, next) => {
    try {
        const todos = await Todo.findAll({ where: { userId: req.params.userId } });
        if(todos){
        res.status(201).send(todos);
        } else{
          res.status(404).send({ error : "There are no todos for this user" });
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
  })

  todosRouter.put("/:id", JWTAuthMiddleware, async (req, res, next) => {
    try {
      const todoModify = await Todo.update(req.body, {
        where: {
          id: req.params.id,
        },
        returning: true,
      });
      if(todoModify){
      res.status(204).send()
      } else{
        res.status(404).send({ error : "No todo was found" });
      }
    } catch (error) {
      console.log(error);
    }
  });

  todosRouter.delete("/:id", JWTAuthMiddleware, async (req, res, next) => {
    try {
      const todoRemove = await Todo.destroy({ where: { id: req.params.id } });
      if(todoRemove){
      res.status(200).send();
      } else{
        res.status(404).send({ error : "No todo was found" });
      }
    } catch (error) {
      console.log(error);
    }
  });

  export default todosRouter;