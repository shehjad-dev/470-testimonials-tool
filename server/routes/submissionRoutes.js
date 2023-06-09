const express = require("express");
const router = express.Router();
const {
    getSubmissions,
    getMySubmissions,
    getMyActiveSubmissions,
    updateStatus,
    setSubmission,
} = require("../controllers/submissionController");

router.get("/", getSubmissions);

router.get("/mysubmission/:formid", getMySubmissions);

router.get("/myactivesubmission/:formid", getMyActiveSubmissions);

//router.get("/:id", getForm);

router.post("/", setSubmission);

router.put("/:id", updateStatus);

//router.delete("/:id", deleteForm);

module.exports = router;
