const express = require("express")
const router = express.Router()
const {
    getAllTours,
    createTour,
    getSingleTour,
    updateTour,
    deleteTour,
    checkID,
    checkBody
} = require("../controllers/tourController")

router.param('id', checkID)
router.route('/').get(getAllTours).post(checkBody, createTour)
router.route('/:id').get(getSingleTour).patch(updateTour).delete(deleteTour)

module.exports = router