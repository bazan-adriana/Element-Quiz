const mongoose = require('mongoose');

const ElementSchema = new mongoose.Schema({
    atomicNumber: {
        type: Number,
        required: [true, 'Atomic Number is required'],
        min: [1, 'Atomic Number must be at least 1 characters long']
    },
    symbol: {
        type: String,
        required: [true, 'Symbol is required'],
        minlength: [1, 'Symbol must be at least 1 characters long']
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [3, 'Name must be at least 3 characters long']
    },
    atomicMass: {
        type: Number,
        required: [true, 'Atomic Mass is required'],
        min: [1, 'Atomic Mass must be at least 1 characters long']
    },
    groupBlock: {
        type: String,
        required: [true, 'Group Block is required'],
        minlength: [1, 'Group Block must be at least 1 characters long']
    },
    standardState: {
        type: String,
        required: [true, 'Standard State is required'],
        minlength: [3, 'Standard State must be at least 3 characters long']
    },
    bondingType: {
        type: String,
        required: [true, 'Bonding Type is required'],
        minlength: [3, 'Bonding Type must be at least 3 characters long']
    },
    yearDiscovered: {
        type: Number,
        required: [true, 'Year Discovered is required'],
        min: [3, 'Year Discovered must be at least 3 characters long']
    },

}, { timestamps: true });

// export this model
module.exports.Element = mongoose.model('Element', ElementSchema);



