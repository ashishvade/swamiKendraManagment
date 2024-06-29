const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const naivadyaModel = new Schema({
    naivadyaId: { type: String , unique: true,trim: true},
    name:{type: String ,trim: true},
    mobail:{type: Number },
    naivadyaType:{
        type:String,trim: true,
        enum: ["Morning", "Evning"],
    },
    time:{type: String ,trim: true},
    dayName:{type: String,trim: true },
    dayPriority:{type: Number,trim: true },
    status: {
        type: String,trim: true,
        enum: ["active", "delete"],
        default: "active"
    },
   
}, { timestamps: true });

module.exports = mongoose.model("naivadyas", naivadyaModel);
