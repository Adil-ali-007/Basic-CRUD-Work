const express  = require('express')
const cors = require('cors')
const database = require('./src/db/db.js')

database();

const bookRouter = require('./src/routes/book.route.js');
const app = express()

app.use(cors())

app.use(express.json())

app.get('/',(req,res)=> {
    res.send("Hello World")
})

app.use('/book', bookRouter)

app.listen(8000, ()=> {
    console.log("Server is Listening at PORT 8000");
    
})

