var student;
// connect mongodb
var mongoDbConnect = function(error, db){
    if(error) throw error;
     var dbData =  db.db("mongoData")
     student = dbData.collection("students")
}
// get name
var getDataByName = function(req, res) {
  student.find({}).toArray(function(err, result) {
    if (err) throw err;
    for (var i =0; i < result.length; i++) {
      if(result[i].name === req.params.name) {
      res.send({ "status": "ok",
                 "dataParticular" : result[i]})
      }
    }
  });
}
// submitt form
var submitData = function(req, res) {
    var resultArray
	student.insert(req.body)
	student.find({}).toArray(function(err, result) {
		if (err) throw err;
		resultArray = result
		res.send({"status": "ok",
		           "dataList" :resultArray,
		           "dataParticular" : req.body})
	});
}
// export all function
module.exports = {
  mongoDbConnect : mongoDbConnect,
	getDataByName : getDataByName,
	submitData : submitData
}