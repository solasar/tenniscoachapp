var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var mysql = require('mysql');
var connection = mysql.createConnection({

host: 'localhost',
user: 'root',
password : 'AjKXE5VmTENNISknmHQrfr',
database : 'TennisCore1' });

var app = express();
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
var result = false;
var i = 0;

app.get('/', function (req, res) {

    i++;
    res.send('get request #' + i);

});

app.post('/login', function (req, res) {
    username = req.body['name'];
    pwhash = req.body['pwhash'];
    var k = connection.query('SELECT Password from User where Username = ' + connection.escape(username), function(err, rows, fields) {
	var data = '401';
	try {
	if (err) {
		data ='400'
	}
	else if (rows[0].Password ==  pwhash) {
		data = '200';
	}
	else {
		data = '401';
	}}
	catch(err) {}
	res.status(data);
	res.send();
	}
);
});

app.listen(80, function() {
    console.log('Starting login handler on port 80...');
});

app.post('/registration', function(req, res) {


uid = req.body['username'];
fname = req.body['firstname'];
lname = req.body['lastname'];
email = req.body['email'];
phone = req.body['phone'];
pwhash = req.body['password'];
utype = req.body['usertype'];
res.status('200');
var queryData = {Username : uid, Password: pwhash, Type: utype, FirstName: fname, LastName: lname, Email: email, PhoneNumber: phone};
var k = connection.query("INSERT INTO User SET ?", queryData, function(err, rows, fields) {
if(err) {
	res.status('400').send();
	}

if(utype == 'P' || utype =='B') {
var playerQuery = connection.query("INSERT INTO Player set ?",{Username: uid} , function(err, rows, fields) {
		if(err) {
			res.status('400').send();
		}
		else if(utype == 'P') {
			res.send();
		}
	})
}
if(utype == 'C' || utype == 'B') {
var coachQuery = connection.query("INSERT INTO Coach set ?", {Username: uid} , function(err, rows, fields) {
		if(err) {
			console.log('ERROR 3');
			res.status('400').send();
		}
		else {
			res.send()
		}
	});
}
});
});

app.post('/dinput', function(req, res) {

var uid = req.body['username'];
var pwhash = req.body['pwhash'];
var type = req.body['type'];
var zone = req.body['zone'];
var success = req.body['success'];

var shotQuery = {Username: uid, Type: type, Zone: zone, Made:  success};

var loginConnection = connection.query("Select Password from User where Username = " + connection.escape(uid), function(err, rows, fields) {
	if(err) {
		res.status('400').send();
	}
	try {
	if(rows[0].Password === pwhash) {
		var shotConnection = connection.query("INSERT INTO Shot SET ?", shotQuery, function(err, rows, fields) {
			if(err) {
				res.status('401');
				res.send();
			}
			else {
				res.status('200');
				res.send();
			}
	});
	}}
	catch(error) {
	res.status('400');
	res.send();
	}
});

});

app.post('/getHeat', function(req, res) {

var uid = req.body['username'];
//var pwhash = req.body['pwhash'];
var loginConnection = connection.query("Select Password from User where Username = " + connection.escape(uid), function(err,rows,fields) {
	if(err) {
		res.status('401').send();
	}
	//try {
	//if(rows[0].Password === pwhash) {
		var shotQuery = connection.query('SELECT Count(*), Username, Zone, Made FROM `Shot` WHERE Username = ' + connection.escape(uid) + '  group by zone, made', function(err, rows, fields) {
			if(err) {
				res.status('401').send();
			}
			res.contentType('application/json');
			res.status('200').send(JSON.stringify(rows));
		});
	//}}
	//catch(error) {
		//res.status('400').send();
	//}
});
});


app.post('/getZone', function(req, res) {

var  uid = req.body['username'];
var pwhash = req.body['pwhash'];
var shotQuery = connection.query('Select Count(*), Username, Zone, Made, Type from Shot Where Username = ' + connection.escape(uid) +  " group by zone, made, Type", function(err, rows, fields) {
	if(err) {
		console.log(err);
		res.status('401').send();
	}
	else {
		res.contentType('application/json');
		res.header('Access-Control-Allow-Headers', 'Content-Type');
		res.status('200').send(JSON.stringify(rows));
	}
});

});

app.post('/getZoneOrdered', function(req, res) {
var zone = req.body['zone'];
var uid = req.body['username'];
var inserts = [uid,zone];
var query = mysql.format("Select Count(*), Username, Type from Shot where Username=? and Zone=? Group by Type Order by Count(*) DESC", inserts);
var queryAct = connection.query(query,  function(err, rows, fields) {

	if(err) {
		console.log(err);
		res.status('401').send();
	}
	else {
		res.contentType('application/json');
		res.header('Access-Control-Allow-Headers', 'Content-Type');
		res.status('200').send(JSON.stringify(rows));
	}
});
});

app.post('/profile', function(req, res) {

var uid = req.body['username'];

var query = connection.query("Select * from User where Username = " + connection.escape(uid), function(err, rows, fields) {

	if(err) {
		console.log(err);
		res.status('401').send();
	}
	else {
		res.contentType('application/json');
		res.header('Access-Control-Allow-Headers', 'Content-Type');
		res.status('200').send(JSON.stringify(rows));
	}
});
});

app.post('/rank', function(req, res) {

var uid = req.body['username'];
var query = connection.query("Select Level from Player where username = " + connection.escape(uid), function(err, rows, fields) {
if(err) {
	console.log(err);
	res.status('401').send();
}
else {
	res.contentType('application/json');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.status('200').send(JSON.stringify(rows));
}
});

});

app.post('/passwordChange', function(req, res) {
var uid = req.body['username'];
var pwold = req.body['pwold'];
var pwnew = req.body['pwnew'];

var loginQuery = connection.query('Select Password from User where Username = ' + connection.escape(uid), function(err, rows, fields) {

	if(err) {
		console.log(err);
		res.status('401').send();
	}
	else {
		try {
		if(pwold === rows[0].Password) {
		var pQuery = mysql.format('Update User Set Password = ?  Where Username = ?', [pwnew, uid]);
		var pActQuery = connection.query(pQuery, function(err, rows, fields) {
			res.contentType('application/json');
			res.header('Access-Control-Allow-Headers', 'Content-Type');
			res.status('200').send();
		});}
		else {
			res.status('400').send();
		}
		}
		catch(err) {
			res.status('400').send();
		}
	}

});

});
