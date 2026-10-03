const express = require("express");

const {
    createComplaint,
    getComplaints,
    getComplaintById,
    updateComplaint,
    updateStatus,
    deleteComplaint
} = require("../controllers/complaintController");

const router = express.Router();

router.post("/", createComplaint);

router.get("/", getComplaints);

router.get("/:id", getComplaintById);

router.put("/:id", updateComplaint);

router.patch("/:id/status", updateStatus);

router.delete("/:id", deleteComplaint);

module.exports = router;