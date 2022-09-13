"use strict";
exports.__esModule = true;
var socket_io_1 = require("socket.io");
var action_js_1 = require("../common/action.js");
var io = new socket_io_1.Server({
    cors: {
        origin: 'http://localhost:1234'
    }
});
io.listen(3000);
io.on('connection', function (socket) {
    socket.on(action_js_1.Action.HostRoom, function () { });
});
