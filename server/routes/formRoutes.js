const express = require("express");
const router = express.Router();
const {
    getForms,
    getMyForms,
    getForm,
    setForm,
    updateForm,
    deleteForm,
} = require("../controllers/formController");

router.get("/", getForms);

router.get("/myforms/:userid", getMyForms);

router.get("/:id", getForm);

router.post("/", setForm);

router.put("/:id", updateForm);

router.delete("/:id", deleteForm);

module.exports = router;
