import mongoose from "mongoose";
import Todos from "../models/todos.model.js";


const addTodo = (req , res) =>{
    const {title , description } = req.body;

    if (!title || !description) {
        res.status(400).json({
          message: "title or description required",
        });
        return;
      }


    const todo = Todos.create({
        title,
        description,
    });
    res.status(201).json({
        message : "Todo added successfully"
    })
}


export default addTodo;