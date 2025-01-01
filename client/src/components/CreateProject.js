import React, { useState } from 'react';
import { createProject } from '../api/index';


const CreateProject = ({ onProjectCreated }) => {
    const [name, setName] = useState('');
    const [techStack, setTechStack] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const projectTechStack = techStack.split(',').map((tech) => tech.trim());
        const newProject = await createProject(name, projectTechStack);
        if (newProject) {
            onProjectCreated();
            setName('');
            setTechStack('');
        }
    };

    return (
        <div>
            <h2>Create New Project</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Project Name"
                    required
                />
                <input
                    type="text"
                    value={techStack}
                    onChange={(e) => setTechStack(e.target.value)}
                    placeholder="Tech Stack (comma separated)"
                    required
                />
                <button type="submit">Create Project</button>
            </form>
        </div>
    );
};

export default CreateProject;
