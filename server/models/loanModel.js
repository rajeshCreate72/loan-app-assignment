const mongoose = require("mongoose");

const schemaLoan = new mongoose.Schema({
    loanAmount: {
        type: Number,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
});
