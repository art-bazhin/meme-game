"use strict";
exports.__esModule = true;
var socket_io_1 = require("socket.io");
var io = new socket_io_1.Server({
    cors: {
        origin: 'http://localhost:1234'
    }
});
io.listen(3000);
io.on('connect', function () {
    console.log('connected--');
});
