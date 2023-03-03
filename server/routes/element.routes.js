const ElementController = require('../controllers/element.controller');

module.exports = function (app) {
    app.get('/api/elements', ElementController.allElements);
    app.get('/api/elements/:atomicNumber', ElementController.oneElement);
    app.post('/api/elements', ElementController.addElement);
    app.put('/api/elements/:id', ElementController.updateElement);
    app.delete('/api/elements/:id', ElementController.deleteElement);
};
