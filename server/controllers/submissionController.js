const asyncHandler = require("express-async-handler");

const Submission = require("../models/submissionModel");

// @desc Get forms
// @route GET /api/forms
// @access Private
const getSubmissions = asyncHandler(async (req, res) => {
    const submissions = await Submission.find();
    /* const forms = await Form.find({
        userId: req.body.userId,
    }); */
    res.status(200).json(submissions);
});

const getMySubmissions = asyncHandler(async (req, res) => {
    //const forms = await Form.find();
    //console.log(req.params.id);
    const submissions = await Submission.find({
        formId: req.params.formid,
    });
    res.status(200).json(submissions);
});

const getMyActiveSubmissions = asyncHandler(async (req, res) => {
    //const forms = await Form.find();
    //console.log(req.params.id);
    const submissions = await Submission.find({
        formId: req.params.formid,
        show: true,
    });
    res.status(200).json(submissions);
});

// @desc Get form
// @route GET /api/forms/:id
// @access Private
/* const getForm = asyncHandler(async (req, res) => {
    const form = await Form.findById(req.params.id);

    if (!form) {
        res.status(400);
        throw new Error("Form Not Found");
    }

    res.status(200).json(form);
}); */

// @desc Set form
// @route POST /api/forms
// @access Private
const setSubmission = asyncHandler(async (req, res) => {
    const form = await Submission.create({
        ratingVal: req.body.ratingVal,
        testimonialText: req.body.testimonialText,
        show: req.body.show,
        formId: req.body.formId,
        clientName: req.body.clientName,
        clientDesignation: req.body.clientDesignation,
    });
    res.status(200).json(form);
});

// @desc Update form
// @route PUT /api/forms/:id
// @access Private
const updateStatus = asyncHandler(async (req, res) => {
    const submission = await Submission.findById(req.params.id);

    if (!submission) {
        res.status(400);
        throw new Error("Submission Not Found");
    }
    submission.show = !submission.show;

    const updatedSubmission = await Submission.findByIdAndUpdate(
        req.params.id,
        submission,
        {
            new: true,
        }
    );
    //res.status(200).json(updatedForm);
    res.status(200).json(updatedSubmission);
});

// @desc Delete froms
// @route DELETE /api/forms/:id
// @access Private
/* const deleteForm = asyncHandler(async (req, res) => {
    const form = await Form.findById(req.params.id);

    if (!form) {
        res.status(400);
        throw new Error("Form Not Found");
    }

    await form.remove();

    res.status(200).json({ id: req.params.id });
}); */

module.exports = {
    getSubmissions,
    getMySubmissions,
    getMyActiveSubmissions,
    updateStatus,
    setSubmission,
};
