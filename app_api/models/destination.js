const mongoose = require('mongoose');

// Define the destination schema
const destinationSchema = new mongoose.Schema({
    destinationId: {type: Number, required: true, index: true},
    name: {type: String, required: true, index: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    
});
const Destination = mongoose.model('destination', destinationSchema);
module.exports = Destination;