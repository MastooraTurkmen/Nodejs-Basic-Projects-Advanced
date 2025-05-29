const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")
const app = require("./app")

mongoose.connect(process.env.MONGO_DB)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Server is running on port 3000');
})