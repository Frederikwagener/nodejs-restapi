module.exports = function(app) {
 
    var albums = require('../controllers/album.controller.js');
 
    // Create a new Album
    app.post('/api/albums', albums.create);
 
    // Retrieve all Albums
    app.get('/api/albums', albums.findAll);
 
    // Retrieve a single Album by Id
    app.get('/api/albums/:id', albums.findOne);
 
    // Update a album with Id
    app.put('/api/albums/:id', albums.update);
 
    // Delete a Customer with Id
    app.delete('/api/albums/:id', albums.delete);
}