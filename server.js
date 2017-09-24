var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/team_mgr');
var PlayerSchema = new mongoose.Schema({
 name: { type:String, required: true, minlength:2, maxlength:50},
 position: { type:String, maxlength: 50 },
 g1status: { type:String, default:'Undecided'},
 g2status: { type:String, default:'Undecided'},
 g3status: { type:String, default:'Undecided'}
});
mongoose.model('Player', PlayerSchema);
var Player = mongoose.model('Player');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public/dist')));

app.get('/players', function(req, res){
	console.log('app.get /players');
	Player.find({}, function(err, players){
		if(err){
			console.log('***app.get /players Player.find:' + err);
		} else {
			// console.log(players);
			return res.json(players);
		}
	});
});

app.post('/players', function(req,res){
	var player = new Player( { name:req.body.name, position:req.body.position } );
	player.save(function(err){
		if(err){
			console.log('***app.post /players player.save:' + err);
		} else {
			console.log('successfully added ' + player.name);
			Player.find({}, function (err,players){
				if(err){
				console.log('***app.get /players Player.find:' + err);
				} else {
					// console.log(players);
					return res.json(players);
				}
			});
		}
	});
});

app.delete('/players/:id', function(req, res){
	console.log('***app.delete /players/:' + req.params.id);
	Player.deleteOne({_id:req.params.id}, function(err,player){
			if(err){
				console.log("something went wrong in Player.DeleteOne");
				console.log(err);
			} else {
				console.log("deleted " + player);
				Player.find({}, function (err,players){
				if(err){
				console.log('***app.get /players Player.find:' + err);
				} else {
					// console.log(players);
					return res.json(players);
				}
			});
		}
	});
});

app.put('/players/:id', function(req, res){
	console.log('***app.put /players/:' + req.params.id);
	Player.findOne({_id:req.params.id}, function(err,player)
	{
			if(err)
			{
				console.log('***Player.updateOne: ' + err);
			} else
			{
				console.log("updating " + req.body.name);
				player.g1status = req.body.g1status;
				player.g2status = req.body.g2status;
				player.g3status = req.body.g3status;
				player.save(function(err)
				{
					if(err)
					{
						console.log('***app.post /players player.save:' + err);
					} else
					{
						console.log('***player.save ' + player.name);
						Player.find({}, function (err,players){
							if(err)
							{
								console.log('***app.get /players Player.find:' + err);
							} else
							{
								// console.log(players);
								return res.json(players);
							}
						});
					}
				});
			}
	});
});

app.listen(8000, function() {
	console.log("listening on port 8000");
});