var albums = {
        album1: {
          title: "Klasentreffen 2010",
		  id: 1
        },
         album2: {
          title: "Klasentreffen 2011",
		   id: 2
        },
         album3: {
          title: "Klasentreffen 2012",
		   id: 3
        },
         album4: {
          title: "Klasentreffen 2013",
		   id: 4
        }
      }
 
exports.create = function(req, res) {
  var newAlbum = req.body;
    albums["album" + newAlbum.id] = newAlbum;
  console.log("--->After Post, albums:\n" + JSON.stringify(albums, null, 4));
    res.end("Post Successfully: \n" + JSON.stringify(newAlbum, null, 4));
};
 
exports.findAll = function(req, res) {
    console.log("--->Find All: \n" + JSON.stringify(albums, null, 4));
    res.end("All Albums: \n" + JSON.stringify(albums, null, 4));  
};
 
exports.findOne = function(req, res) {
    var album = albums["album" + req.params.id];
    console.log("--->Find album: \n" + JSON.stringify(album, null, 4));
    res.end( "Find a Album:\n" + JSON.stringify(album, null, 4));
};
 
exports.update = function(req, res) {
  var id = parseInt(req.params.id);
  var updatedAlbum = req.body; 
  if(albums["album" + id] != null){
    // update data
    albums["album" + id] = updatedAlbum;
 
    console.log("--->Update Successfully, albums: \n" + JSON.stringify(albums, null, 4))
    
    // return
    res.end("Update Successfully! \n" + JSON.stringify(updatedAlbum, null, 4));
  }else{
    res.end("Don't Exist Customer:\n:" + JSON.stringify(updatedAlbum, null, 4));
  }
};
 
exports.delete = function(req, res) {
  var deleteAlbum = albums["album" + req.params.id];
    delete albums["album" + req.params.id];
    console.log("--->After deletion, album list:\n" + JSON.stringify(albums, null, 4) );
    res.end( "Deleted album: \n" + JSON.stringify(deleteAlbum, null, 4));
};