import React, { useState } from 'react';
import { createSolution } from '../api';

const CreateSolution = ({ problemId, onSolutionCreated }) => {
    const [solutionAttempted, setSolutionAttempted] = useState('');
    const [solutionWorked, setSolutionWorked] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (solutionAttempted.trim()) {
            const newSolution = await createSolution(problemId, solutionAttempted, solutionWorked);
            if (newSolution) {
                onSolutionCreated();
                setSolutionAttempted('');
                setSolutionWorked('');
            }
        }
    };

    return (
        <div>
            <h4>Attempt a Solution</h4>
            <form onSubmit={handleSubmit}>
        <textarea
            value={solutionAttempted}
            onChange={(e) => setSolutionAttempted(e.target.value)}
            placeholder="What did you try?"
            required
        />
                <textarea
                    value={solutionWorked}
                    onChange={(e) => setSolutionWorked(e.target.value)}
                    placeholder="What worked?"
                />
                <button type="submit">Add Solution</button>
            </form>
        </div>
    );
};

export default CreateSolution;
