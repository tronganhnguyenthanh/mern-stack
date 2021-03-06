const express = require("express")
let app = express()
const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")
mongoose.connect(process.env.NODE_API_URL_APP).then(() => {console.log("Database connected")}).catch(() => console.log("Failed to connect database"))
const cors = require("cors")
const router_api = require("./routes/routes")
let PORT = 1997
app.use(cors())
app.use(express.json())
app.use("/api", router_api)
app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`)
})