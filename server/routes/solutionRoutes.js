const express = require('express');
const Solution = require('../models/Solution');
const router = express.Router();

// To create a new solution
router.post('/create', async (req, res) => {
    const { problemId, solutionAttempted, solutionWorked } = req.body;
    const newSolution = new Solution({ problemId, solutionAttempted, solutionWorked });

    try {
        const savedSolution = await newSolution.save();
        res.status(201).json(savedSolution);
    } catch (err) {
        res.status(500).json({ message: 'Error creating solution', error: err });
    }
});

// To get solutions for a problem
router.get('/problem/:problemId', async (req, res) => {
    const { problemId } = req.params;

    try {
        const solutions = await Solution.find({ problemId });
        res.status(200).json(solutions);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching solutions', error: err });
    }
});

module.exports = router;
