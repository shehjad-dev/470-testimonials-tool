const { text } = require("express");
const mongoose = require("mongoose");

const formSchema = mongoose.Schema(
    {
        rating: {
            type: Boolean,
            required: [true, "Please add rating option"],
        },
        testimonial: {
            type: Boolean,
            required: [true, "Please add testimonials option"],
        },
        status: {
            type: String,
            required: [true, "Please add status"],
        },
        userId: {
            type: String,
            required: [true, "Please add UserId"],
        },
        title: {
            type: String,
            required: [true, "Please add title"],
        },
    },
    {
        timestamps: true,
    }
);

/* const formSchema2 = mongoose.Schema(
    {
        rating: {
            type: Boolean,
            required: [true, "Please add rating option"],
        },
        testimonial: {
            type: Boolean,
            required: [true, "Please add testimonials option"],
        },
        userName: {
            type: String,
            required: [true, "Please add name option"],
        },
        userAvatar: {
            type: String,
            required: [true, "Please add name userAvatar"],
        },
        servicesName: {
            type: String,
            required: [true, "Please add name services title"],
        }
    },
    {
        timestamps: true,
    }
); */

module.exports = mongoose.model("Form", formSchema);
