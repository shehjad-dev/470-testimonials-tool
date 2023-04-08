const asyncHandler = require("express-async-handler");

const Form = require("../models/formModel");

// @desc Get forms
// @route GET /api/forms
// @access Private
const getForms = asyncHandler(async (req, res) => {
    const forms = await Form.find();
    /* const forms = await Form.find({
        userId: req.body.userId,
    }); */
    res.status(200).json(forms);
});

const getMyForms = asyncHandler(async (req, res) => {
    //const forms = await Form.find();
    //console.log(req.params.id);
    const forms = await Form.find({
        userId: req.params.userid,
    });
    res.status(200).json(forms);
});

// @desc Get form
// @route GET /api/forms/:id
// @access Private
const getForm = asyncHandler(async (req, res) => {
    const form = await Form.findById(req.params.id);

    if (!form) {
        res.status(400);
        throw new Error("Form Not Found");
    }

    res.status(200).json(form);
});

// @desc Set form
// @route POST /api/forms
// @access Private
const setForm = asyncHandler(async (req, res) => {
    //console.log(req.body);
    /* if (!req.body.rating || !req.body.testimonial) {
        res.status(400);
        throw new Error("Please add a rating or testimonial field");
    } */

    const form = await Form.create({
        rating: req.body.rating,
        testimonial: req.body.testimonial,
        userId: req.body.userId,
        title: req.body.title,
        status: req.body.status,
    });
    res.status(200).json(form);
});

// @desc Update form
// @route PUT /api/forms/:id
// @access Private
const updateForm = asyncHandler(async (req, res) => {
    const form = await Form.findById(req.params.id);

    if (!form) {
        res.status(400);
        throw new Error("Form Not Found");
    }

    const updatedForm = await Form.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json(updatedForm);
});

// @desc Delete froms
// @route DELETE /api/forms/:id
// @access Private
const deleteForm = asyncHandler(async (req, res) => {
    const form = await Form.findById(req.params.id);

    if (!form) {
        res.status(400);
        throw new Error("Form Not Found");
    }

    await form.remove();

    res.status(200).json({ id: req.params.id });
});

module.exports = {
    getForms,
    getMyForms,
    getForm,
    setForm,
    updateForm,
    deleteForm,
};
