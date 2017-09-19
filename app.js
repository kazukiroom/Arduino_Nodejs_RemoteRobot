var app = require('http').createServer(handler),
	io = require('socket.io').listen(app),
	fs = require('fs'),
	path = require('path'),
	serialport = require('serialport');

io.set('log level', 1);

// Serial Port
var portName = 'COM2'; // WINDOWS$B4D6-(B(Mac$B$N>l9g$O0[$J$j$^$9(B)
var sp = new serialport(portName, {
    //baudRate: 57600,
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false,
});

app.listen(3000);
function handler(req, res){

	var filePath = req.url;

	if (filePath == '/') {
	    filePath = '/index.html';
	} else {
 	    filePath = req.url;
	}
	//console.log(filePath);
	var extname = path.extname(filePath);
	//console.log("filePath: " + filePath);
	//console.log("ext: " + extname);

	//contentType$B@Z$jJ,$1(B
	var contentType = 'text/html';
	switch (extname) {
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.css':
			contentType = 'text/css';
			break;
	}
	console.log(contentType);

	//console.log(__dirname + filePath);
	fs.readFile(__dirname + filePath, function(err, data){
		if(err){
			res.writeHead(500);
			return res.end('Error');
		}
		res.setHeader('Content-Type', contentType);
		res.writeHead(200);
		res.write(data);
		res.end();
	});
}

//click from client
io.sockets.on('connection', function(socket){
	//button pushed
	socket.on('emit_from_client', function(data){
		//check the data
	//	console.log(data);
		var receive = JSON.stringify(data);
		console.log("data: [" + receive + "]");

		//write to serialport
		sp.write(receive , function(err, results) {
    //        console.log('bytes written: ', results);
        });

	});
});

sp.on('close', function(err) {
    console.log('port closed');
});

//serialport open
sp.open(function () {
  console.log('port open');
});
