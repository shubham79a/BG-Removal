import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './configs/mongoDB.js'


//  app config
const PORT = process.env.PORT || 4000
const app = express()
await connectDB()


// initialize middleware
app.use(express.json())
app.use(cors())



// api routes
app.get('/', (req, res) => {
    res.send('API working')
})


app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
})