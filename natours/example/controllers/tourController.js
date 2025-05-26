const fs = require("fs")
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))

const getAllTours = (req, res) => {
    res.status(200).json({
        status: "success",
        results: tours.length,
        data: {
            tours
        }
    })
}

const createTour = (req, res) => {
    const newId = tours[tours.length - 1].id + 1
    const newTour = Object.assign({ id: newId }, req.body)

    tours.push(newTour)

    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        res.status(201).json({
            status: "success",
            data: {
                tours: newTour
            }
        })
    })
}

const getSingleTour = (req, res) => {
    console.log(req.params)

    const id = req.params.id * 1
    const tour = tours.find(el => el.id === id)

    if (!tour) {
        return res.status(404).json({
            status: "fail",
            message: "Tour not found"
        })
    }

    res.status(200).json({ status: "success", data: { tour } })
}

const updateTour = (req, res) => {
    const id = req.params.id * 1
    if (id > tours.length) {
        return res.status(404).json({
            status: "fail",
            message: "Tour not found"
        })
    }
    res.status(200).json({ status: "success", data: { tour: "<Updated tour here...>" } })
}

const deleteTour = (req, res) => {
    const id = req.params.id * 1
    const tour = tours.find(el => el.id !== id)

    if (id > tours.length) {
        return res.status(404).json({
            status: "fail",
            message: "Tour not found"
        })
    }
    res.status(204).json({ status: "success", data: { tour } })
}

module.exports = { getAllTours, createTour, getSingleTour, updateTour, deleteTour }