const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

const tripsList = async (req, res) => {

    try {
        const trips = await Trip.find();
        res 
            .status(200)
            .json(trips);
    } catch (err) {

        res 
            .status(500)
            .json(err);
    }
};

const tripsFindByCode = async (req, res) => {

    try {

        const trip = await Trip.findById(req.params.tripCode);

        if (!trip) {

            return res 
                .status(404)
                .json({"message": "Trip not found"});
        }

        res 
            .status(200)
            .json(trip);


    } catch (err) {

        res
            .status(500)
            .json(err);
    }

};

const tripsAddTrip = async (req, res) => {

    try {

        const trip = await Trip.create({
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        });

        res
            .status(201)
            .json(trip);

    } catch (err) {

        res
            .status(400)
            .json(err);
    }
};

module.exports = {
    tripsList, tripsFindByCode, tripsAddTrip
};