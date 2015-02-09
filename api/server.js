// STEPS 1 & 2
'use strict';
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 10747;
app.listen(port);

var me = {
	'name': 'Fred Jones',
	'location': 'Lehi, UT',
	'hobbies': ['fishing', 'photography', 'soccer', 'legos'],
	'occupations': ['Photographer', 'Web Designer', 'Graphic Designer', 'Web Developer'],
	'mentions': ['http://www.fredrickjonesdesign.com/', 'http://www.linkedin.com/in/fredrickjones/', 'https://plus.google.com/105932407378376296758/posts/p/pub', 'https://vimeo.com/fredrickjones'],
	'references': ['Mike Every', 'Adam Hullinger', 'Camden Gutzman'],
	'skills': [
			{
				id: 1,
				name: 'JavaScript',
				experience: 'Intermediate'
			},
			{
				id: 2,
				name: 'AngularJS',
				experience: 'Intermediate'
			},
			{
				id: 3,
				name: 'Node.js',
				experience: 'Intermediate'
			},
			{
				id: 4,
				name: 'jQuery',
				experience: 'Intermediate'
			},
			{
				id: 5,
				name: 'Motion Graphics',
				experience: 'Advanced'
			}
		]
	};


app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});


// STEP 3
app.get('/api/name', function(req, res) {
	// console.log('your name here');
	res.json({name: me.name});
});

app.get('/api/location', function(req, res) {
	// console.log('your location');
	res.json({location: me.location});
});

app.get('/api/hobbies', function(req, res) {
	// console.log('your hobbies');
	if(req.query.sort === 'asc') {
		res.json({hobbies: me.hobbies.sort()});
	} else
	if(req.query.sort === 'desc') {
		res.json({hobbies: me.hobbies.reverse()});
	} else {
		res.json({hobbies: me.hobbies});
	}
});

app.get('/api/occupations', function(req, res) {
	// console.log('your occupations');
	res.json({occupations: me.occupations});
});

app.get('/api/occupations/latest', function(req, res) {
	// console.log('your last job');
	var last = me.occupations.length-1;
	res.json({lastOccupation: me.occupations[last]});
});

app.put('/api/location', function(req, res) {
	res.json({location: me.location});
});


// STEP 4
app.get('/api/mentions', function(req, res) {
	res.json({mentions: me.mentions});
});

app.post('/api/mentions', function(req, res) {
	me.mentions.push(req.body.mention);
	// console.log(req.body);
	res.json({mentions: me.mentions});
});

app.get('/api/references', function(req, res) {
	res.json({references: me.references});
});

app.post('/api/references', function(req, res) {
	me.references.push(req.body.reference);
	// console.log(req.body);
	res.json({references: me.references});
});


// STEP 5
app.get('/api/skills', function(req, res) {
	// var resArr = [];
	// if(req.query.experience) {
	// 	for (var i = 0; i < me.skills.length; i++) {
	// 		me.skills[i]
	// 	};
	// }
	if(req.query.experience === 'Beginner') {
		var tempArr = [];
		for (var i = 0; i < me.skills.length; i++) {
			if(me.skills[i].experience === 'Beginner') {
				tempArr.push(me.skills[i]);
			}
		};
		res.json({skills: tempArr});
	} else
	if(req.query.experience === 'Intermediate') {
		var tempArr = [];
		for (var i = 0; i < me.skills.length; i++) {
			if(me.skills[i].experience === 'Intermediate') {
				tempArr.push(me.skills[i]);
			}
		};
		res.json({skills: tempArr});
	} else
	if(req.query.experience === 'Advanced') {
		var tempArr = [];
		for (var i = 0; i < me.skills.length; i++) {
			if(me.skills[i].experience === 'Advanced') {
				tempArr.push(me.skills[i]);
			}
		};
		res.json({skills: tempArr});
	} else {
		res.json({skills: skills});
	}
});

app.post('/api/skills', function(req, res) {
	me.skills.push(req.body.skill);
	// console.log(req.body);
	res.json({skills: skills});
});





