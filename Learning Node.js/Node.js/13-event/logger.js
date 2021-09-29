const EventEmitter = require('events');
//const emitter = new EventEmitter();
class Logger extends EventEmitter{
    log(callback){
        this.emit('log','started......');
        callback();
        this.emit('log','ended!')
    }
}


//클래스에 넣어버린다.
// function log(callback){
//     emitter.emit('log','started......');
//     callback();
//     emitter.emit('log','ended!')
// }

module.exports.Logger = Logger;