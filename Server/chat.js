
var app = require('express')();

var http = require('http').Server(app);

var io = require('socket.io')(http);

app.get('/', function(req,res){
	
	res.send('<h1>Welcome Realtime Server</h1>');
	
});

io.on('connection', function(socket){
	
	socket.on('login',function(obj){
		
		socket.userid = obj.userid;
		
		io.emit('login', obj);
		
		console.log(socket.userid + ':' + obj);
		
	});
	
	socket.on('loginout', function(obj){
		
		io.emit('loginout', obj);
		
		console.log(socket.userid + ':' + obj);
		
	});
	
	socket.on('send', function(obj){
		
		if(obj.fm == true){
			
			io.emit('receive', obj);
			
		}else{
			
			io.emit('receive' + socket.userid, obj);
			
		}
		
		console.log(socket.userid + ':' + obj.data);
		
	});
	
});

http.listen(3000, function(){
	
	console.log('listening on *:3000');
	
});
