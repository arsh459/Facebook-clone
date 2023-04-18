//imports
const express = require("express")
const cors = require("cors")
const { readdirSync } = require("fs")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

//configuring environment variables
dotenv.config()

//database connnection
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database Connected")
  })
  .catch((err) => {
    console.log(err)
  })

//starting server
const app = express()
const port = process.env.PORT || 8000

//middlewares
app.use(express.json())
app.use(cors())

//routes
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)))

app.listen(port, () => {
  console.log("server listening on", `http://localhost:${port}`)
})
