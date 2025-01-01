import React, { useState } from 'react';
import { createProblem } from '../api';

const CreateProblem = ({ projectId, onProblemCreated }) => {
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (description.trim()) {
            const newProblem = await createProblem(projectId, description);
            if (newProblem) {
                onProblemCreated();
                setDescription('');
            }
        }
    };

    return (
        <div>
            <h3>Add a New Problem</h3>
            <form onSubmit={handleSubmit}>
        <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the problem..."
            required
        />
                <button type="submit">Add Problem</button>
            </form>
        </div>
    );
};

export default CreateProblem;
