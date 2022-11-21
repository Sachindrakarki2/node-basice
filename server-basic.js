// const runSH = () => {
//   sayHello("prem");
// };

// const sayHello = (name) => {
//   console.log("hi my name is " + name);
// };

// runSH("Prem ")const
// cjs
// const EventEmitter = require("events");

import EventEmitter from "events";
const myEvent = new EventEmitter();
// console.log("first", myEvent);
//create event , susscribe
myEvent.on("eventName", () => {
  // your code
  console.log("the eventName is fired");
});

myEvent.emit("eventName");

//emmit event fire event
