const fs = require("fs")
const Tour = require("../../models/tourModel")

const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_DB)

// Read JSON file
const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
)

// Import data into DB
const importData = async () => {
    try {
        await Tour.create(tours)
        console.log("Data successfully loaded!")
    } catch (error) {
        console.error(error)
    }
    process.exit()
}

// Delete all data from DB
const deleteData = async () => {
    try {
        await Tour.deleteMany()
        console.log("Data successfully deleted!")
    } catch (error) {
        console.error(error)
    }
    process.exit()
}

if (process.argv[2] === '--import') {
    importData()
}
else if (process.argv[2] === '--delete') {
    deleteData()
}
else {
    console.log("Please provide a valid argument: --import or --delete")
}


console.log(process.argv)