import Todo from "./todo.js";
import User from "./user.js";

Todo.belongsTo(User, { onDelete: "CASCADE" }); 
User.hasMany(Article, { onDelete: "CASCADE" });

export { Todo, User};