const dotenv = require("dotenv")
dotenv.config()
const app = require("./app")
const { default: mongoose } = require("mongoose")

mongoose.connect(process.env.MONGO_DB)

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tour must have a name'],
        unique: true,
    },
    rating: {
        type: Number,
        default: 4.5,
    },
    price: {
        type: Number,
        required: [true, 'A tour must have a price'],
    },
})

const Tour = mongoose.model('Tour', tourSchema)

const testTour = new Tour({
    name: 'The Park',
    price: 333
})

testTour.save().then(() => {
    console.log('Tour saved successfully');
}).catch(err => {
    console.log('Error saving tour:', err);
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Server is running on port 3000');
})