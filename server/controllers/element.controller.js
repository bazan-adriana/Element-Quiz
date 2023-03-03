const {Element} = require('../models/element.model');


// get all elements
exports.allElements = (req, res) => {
    Element.find()
        .then(elementList => res.json(elementList))
        .catch(err => res.status(400).json(err));
};


// get one element
module.exports.oneElement = (req, res) => {
    Element.findOne({ atomicNumber: req.params.atomicNumber })
        .then(oneElement => res.json(oneElement))
        .catch(err => res.status(400).json(err));
};


// create
exports.addElement = (req, res) => {
    Element.create(req.body)
        .then(createdElement => res.json(createdElement))
        .catch(err => res.status(400).json(err));
};


// update 
module.exports.updateElement = (req, res) => {
    Element.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedElement => res.json(updatedElement))
        .catch(err => res.status(400).json(err));
};

// delete
module.exports.deleteElement = (req, res) => {
    Element.deleteOne({_id: req.params.id})
        .then(status => res.json(status))
        .catch(err => res.status(400).json(err));
};