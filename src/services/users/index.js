import { Router } from "express";
import { User } from "../../db/models/index.js";
import bcrypt from "bcrypt";
import { generateAccessToken } from "../../auth/tools.js";

const usersRouter = Router();

usersRouter.post('/register', async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(11);
    const user = {
      username: req.body.username,
      password: await bcrypt.hash(req.body.password, salt)
    };
    const userExist = await User.findOne({ where: { username: user.username } });
    if (userExist) {
      res.status(400).send("Username already exist, please choose another one");
    } else {
      const createdUser = await User.create(user);
      const accessToken = await generateAccessToken({ _id: createdUser.id })
      res.status(201).send({ user: createdUser.id, accessToken })
    }
  } catch (error) {
    next(error)
  }
});

usersRouter.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { username: req.body.username } });
    if (user) {
      const passwordValid = await bcrypt.compare(req.body.password, user.password);
      if (passwordValid) {
        const accessToken = await generateAccessToken({ _id: user.id })
        res.status(200).send({ accessToken: accessToken, user: user.id })
      } else {
        res.status(400).send({ error: "Incorrect password or username" });
      }

    } else {
      res.status(404).send({ error: "User does not exist" });
    }
  } catch (error) {
    next(error)
  }
});

export default usersRouter;