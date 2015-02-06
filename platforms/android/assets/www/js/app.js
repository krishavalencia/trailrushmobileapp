// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var restify     =   require('restify');
var mongoose   =   require('mongoose');
var server = module.exports = restify.createServer();




// for the schema ------------------------------------------------------------------------------------------
var mongoose = require("mongoose");
var Schema   = mongoose.Schema;
 var Nameschema = new Schema({
    name: String,
    });
mongoose.model('Names', Nameschema);



//for the controllers -------------------------------------------------------------------
var controllers = {}
    , controllers_path = process.cwd() + '/app/controllers'
fs.readdirSync(controllers_path).forEach(function (file) {
    if (file.indexOf('.js') != -1) {
        controllers[file.split('.')[0]] = require(controllers_path + '/' + file)
    }
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());







mongoose.connect('mongodb://krisha:krisha@ds031591.mongolab.com:31591/testmobile');
exports.createArticle = function(req, res, next) {
    var namesmodel = new Nameschema(req.body);
    namesmodel.save(function(err, article) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            });
        }
    });
}
 

 server.post("/api/1/databases/testmobile/collections/Names", controllers.createArticle);








 

























// CORS
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

var ourapp = angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});




ourapp.controller("ourController", function($scope, $cordovaBarcodeScanner){
  $scope.scanBarcode = function(){
    $cordovaBarcodeScanner.scan().then(function(imageData){
      alert(imageData.text);
      console.log("format: "+ imageData.format);
    }, function(error){
      console.log("An error happened!"+ error);
    });
  }

});



