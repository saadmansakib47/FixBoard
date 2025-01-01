const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
    description: { type: String, required: true }, // Description of the problem
});

const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;

