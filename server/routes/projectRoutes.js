const express = require('express');
const Project = require('../models/Project');
const router = express.Router();

// To create a new project
router.post('/create', async (req, res) => {
    const { name, techStack } = req.body;
    const newProject = new Project({ name, techStack });

    try {
        const savedProject = await newProject.save();
        res.status(201).json(savedProject);
    } catch (err) {
        res.status(500).json({ message: 'Error creating project', error: err });
    }
});

//To get all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching projects', error: err });
    }
});

module.exports = router;
