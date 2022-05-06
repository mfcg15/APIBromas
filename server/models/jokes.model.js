const mongoose = require("mongoose");

const EsquemaJoker = new mongoose.Schema({
    setup: {
        type : String,
        required : [true, "Setup is requerired"],
        minlength: [10,"Setup must be at least 10 characters long"]
    },
    punchline: {
        type : String,
        required : [true, "Punchline is requerired"],
        minlength: [10,"Punchline must be at least 10 characters long"]
    }
},{ versionKey: false, timestamps: true});

const Joker = mongoose.model("jokes", EsquemaJoker);

module.exports = Joker;