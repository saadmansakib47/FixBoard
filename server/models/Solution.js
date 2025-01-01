const mongoose = require('mongoose');

const solutionSchema = new mongoose.Schema({
    problemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Problem', required: true },
    solutionAttempted: { type: String, required: true }, // Solutions attempted
    solutionWorked: { type: Boolean, default: false }, // worked solutions flag
});

const Solution = mongoose.model('Solution', solutionSchema);

module.exports = Solution;
