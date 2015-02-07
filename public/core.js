
var scotchTodo = angular.module('scotchTodo', []);

var mongoose = require('mongoose');
mongoose.connect('mongodb://krisha:krisha@ds031591.mongolab.com:31591/testmobile'); 


module.exports = mongoose.model('savehere', {
	textko : String,

});

var content = textboxko.text;
function mainController($scope, $http) {
  $scope.formData = {};



  // when submitting the add form, send the text to the node API
  $scope.createTodo = function() {
    $http.post('/api/1/databases/testmobile/collections/savehere?apiKey=X8645ILWJXiV_Rmu4gZVn1URuu1WF1Ey', $scope.formData)
      var a = req.body;
	new savehere({
		textko: a.textko,
	
	}).save(function (err, savehere){
		if(err) res.json(err);
		
	});
});
};

 



