const mongoose = require('mongoose');
const Destination = require('../models/destination'); //Register model


// GET: /destinations - lists all the destinations
// Regardless of outcome, include HTML status code response
// and JSON message to the requesting client
const destinationsList = async(req, res) => {
    const query = await Destination
        .find({}) // No filter, return all records
        .exec();

        // DEBUG - Uncomment to log query in console
        // console.log(query)

    if(!query) 
    {//Database returned no data
        return res  
                .status(404)
                .json({ message: 'Bad request' });
    } else { // Return the resulting destination list
        return res
                .status(200)
                .json(query);

    }
};

// GET: /destinations/:destinationId - lists all the destinations
// Regardless of outcome, include HTML status code response
// and JSON message to the requesting client
const destinationsFindById =  async(req, res) => {
    const query = await Destination
        .findOne({'destinationId' : req.params.destinationId}) // return single record
        .exec();

        //  DEBUG - Uncomment to log query in console
        // console.log(query)

    if(!query) 
    {//Database returned no data
        return res  
                .status(404)
                .json({ message: 'Bad request' });
    } else { // Return the resulting trip list
        return res
                .status(200)
                .json(query);

    }
};

// POST: /destinations - Adds a new Destination
// Regardless of outcome, include HTML status code response
// and JSON message to the requesting client
const destinationsAddDestination= async(req, res) => {
    const newDestination = new Destination({
        destinationId: req.body.destinationId,
        name: req.body.name,
        description: req.body.description,
        image: req.body.image
    });

    const query = await newDestination.save();

        if(!query)
        { // Database returned no data
            return res
                .status(400)
                .json({ message: 'Bad request' });
        } else { //Return new Destination
            return res
                .status(201)
                .json(query);
        }
}

// PUT: /destinations/:destinationCode - Updates an existing destination
// Regardless of outcome, include HTML status code response
// and JSON message to the requesting client
const destinationsUpdateDestination = async(req, res) => {

    // DEBUG - Uncomment to log query in console
    // console.log(req.params);
    // console.log(req.body);

    const query = await Destination
        .findOneAndUpdate(
            { 'destinationId' : req.params.destinationId },
            {
                destinationId: req.body.destinationId,
                name: req.body.name,
                description: req.body.description,
                image: req.body.image,
                
            }
        )
        .exec();

        if(!query)
        { // Database returned no data
            return res
                .status(400)
                .json({ message: 'Bad request' });
        } else { // Return resulting updated trip
            return res
            .status(200)
            .json(query);
        }

        // DEBUG - Uncomment to log query in console
        // console.log(q);
};

module.exports = {
    destinationsList,
    destinationsFindById,
    destinationsAddDestination,
    destinationsUpdateDestination
};