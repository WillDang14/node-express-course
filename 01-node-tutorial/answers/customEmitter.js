const EventEmitter = require("events");

const customEmitter = new EventEmitter();

const waitForEvent = () => {
    return new Promise((resolve) => {
        customEmitter.on("happens", (msg) => resolve(msg));
    });
};

const waitTime = () => {
    return new Promise((resolve) => {
        customEmitter.on("timer", (msg) => resolve(msg));
    });
};

const doWait = async () => {
    try {
        const msg = await waitForEvent();
        console.log("We got an event! Here it is: ", msg);

        const msg2 = await waitTime();
        console.log("We got an event! Here it is: ", msg2);
    } catch (err) {
        console.log(err);
    }
};

doWait();

customEmitter.emit("happens", "Hello World!");

setTimeout(() => {
    customEmitter.emit("timer", "Hello Everyone!\n");
}, 2000);
