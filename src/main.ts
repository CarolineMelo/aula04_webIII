import express from "express"
import cors from "cors"
import "dotenv/config"

const { API_PORT, API_HOST } = process.env



const app = express()
app.use(cors())
app.use(express.json())



app.listen(API_PORT, () => {
    console.log(`Server started ${API_HOST}:${API_PORT}`)
})


