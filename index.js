require('dotenv').config();

const connectDB = require("./src/db/index")
const app = require("./src/app")



connectDB.connectDB()
.then( () => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running at port : ${process.env.PORT}`)
    })
})
.catch( (error) => {
    console.log("Mongo DB connection fails !!! ", error);
})