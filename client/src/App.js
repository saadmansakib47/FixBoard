import React, { useState, useEffect } from 'react';
import ProjectList from './components/ProjectList';
import { getProjects } from './api';

const App = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const data = await getProjects();
            setProjects(data);
        };
        fetchProjects();
    }, []);

    return (
        <div>
            <h1>FixBoard</h1>
            {projects.length === 0 ? (
                <p>No projects yet. Please create one!</p>
            ) : (
                projects.map((project) => (
                    <div key={project._id}>
                        <h2>{project.name}</h2>
                        <p>Tech Stack: {project.techStack.join(', ')}</p>
                        <ProjectList projectId={project._id} />
                    </div>
                ))
            )}
        </div>
    );
};

export default App;
