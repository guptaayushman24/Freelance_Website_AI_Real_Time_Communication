var express = require('express');
var Server = require('socket.io').Server;
var createServer = require('http').createServer;
var cors = require('cors');
var PORT = 8001;
var app = express();
var server = new createServer(app);
// Creating the instance of io
var io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        method: ["GET", "POST"],
        credentials: true
    }
});
// const userSocketMap: { [key: string]: string } = {};
var userSocketMap = new Map();
// userSocketMap.set("alice@gmail.com",1)
// userSocketMap.set("jam@gmail.com",2)
app.use(cors());
app.get('/', function (req, res) {
    return res.json({
        'msg': 'Welcome to the Two Way communication'
    });
});
app.get('/map', function (req, res) {
    return res.json({
        'Map': userSocketMap
    });
});
io.on("connection", function (socket) {
    // console.log(`Client Added ${socket.id}`);
    // Registering the user and storing it's id in the HashMap
    socket.on("register-user", function (email) {
        if (!userSocketMap.has(email)) {
            userSocketMap.set(email, socket.id);
            console.log("The email to create group ".concat(email, " is connected with socket ").concat(socket.id));
        }
    });
    // When user will click on send message then it will recieve by the other user
    socket.on("startconversation", function (_a) {
        var message = _a.message, email = _a.email, sender = _a.sender;
        var targetid = userSocketMap.get(email);
        if (targetid) {
            io.emit("startconversation", { message: message, sender: sender });
        }
        else {
            console.log("User is not connected");
        }
    });
});
server.listen(PORT, function () {
    console.log("Web Socket server is running on ".concat(PORT));
});
