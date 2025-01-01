const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    techStack: { type: [String], required: true },  // For storing an array of tech stack names
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
