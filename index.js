import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./src/db/index.js";
import todoRoute from "./src/routes/todos.routes.js"

const app = express()
const port = process.env.PORT


//Middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello hasan!')
})


app.use("/api/v1" , todoRoute)

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
  });


  