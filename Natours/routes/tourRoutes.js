const express = require("express")
const router = express.Router()
const {
    getAllTours,
    createTour,
    getSingleTour,
    updateTour,
    deleteTour,
    aliasTopTours,
    getToursStats,
    getMonthlyPlan
} = require("../controllers/tourController")

router.route('/top-5-cheap').get(aliasTopTours, getAllTours)
router.route("/tour-stats").get(getToursStats)
router.route("/monthly-plan").get(getMonthlyPlan)

router.route('/').get(getAllTours).post(createTour)
router.route('/:id').get(getSingleTour).patch(updateTour).delete(deleteTour)

module.exports = router;