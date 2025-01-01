const express = require('express');
const Problem = require('../models/Problem');
const router = express.Router();

// To create a new problem
router.post('/create', async (req, res) => {
    const { projectId, description } = req.body;
    const newProblem = new Problem({ projectId, description });

    try {
        const savedProblem = await newProblem.save();
        res.status(201).json(savedProblem);
    } catch (err) {
        res.status(500).json({ message: 'Error creating problem', error: err });
    }
});

// To get problems for a project
router.get('/project/:projectId', async (req, res) => {
    const { projectId } = req.params;

    try {
        const problems = await Problem.find({ projectId });
        res.status(200).json(problems);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching problems', error: err });
    }
});

module.exports = router;
