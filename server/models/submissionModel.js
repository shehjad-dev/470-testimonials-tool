const { text } = require("express");
const mongoose = require("mongoose");

const submissionSchema = mongoose.Schema(
    {
        ratingVal: {
            type: Number,
            /* required: [true, "Please add rating value"], */
        },
        testimonialText: {
            type: String,
            /* required: [true, "Please add testimonials value"], */
        },
        show: {
            type: Boolean,
            required: [true, "Please add is to be shown or not"],
        },
        formId: {
            type: String,
            required: [true, "Please add formId"],
        },
        clientName: {
            type: String,
            required: [true, "Please add client Name"],
        },
        clientDesignation: {
            type: String,
            required: [true, "Please add client's Designation"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Submission", submissionSchema);
