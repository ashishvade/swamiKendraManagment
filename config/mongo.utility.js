var mongoose = require('mongoose');
const DEFAULT = "mongodb://0.0.0.0:27017/swamiSmarath";

const OPTIONS = {
    autoIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    maxPoolSize:20
};

const connection = () => {
    try {
        console.log("process.env.DATABASE ?? DEFAULT", process.env.DATABASE ?? DEFAULT)
        mongoose.connect(process.env.DATABASE ?? DEFAULT, OPTIONS);
        const db = mongoose.connection;
        db.on("error", (err) => console.error(err));
        db.once("open", function () {
            console.log("[database] Connected Successfully");
        });
    } catch (err) {
        console.error("[database ERROR] Could Not Connect");
    }
};

const connect = () => {
    try {
        connection();
    } catch (connectionError) {
        console.error("[ERROR] Connection Error");
    }
};

module.exports = { connect };
