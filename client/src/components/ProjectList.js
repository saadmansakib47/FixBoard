import React, { useState, useEffect } from 'react';
import { getProblemsByProjectId } from '../api';
import CreateProblem from './CreateProblem';
import SolutionList from "./SolutionList";

const ProjectList = ({ projectId }) => {
    const [problems, setProblems] = useState([]);

    useEffect(() => {
        const fetchProblems = async () => {
            const data = await getProblemsByProjectId(projectId);
            setProblems(data);
        };

        fetchProblems();
    }, [projectId]);

    return (
        <div>
            <h3>Problems for this Project</h3>
            <CreateProblem projectId={projectId} onProblemCreated={() => setProblems([...problems])} />
            <ul>
                {problems.length === 0 ? (
                    <p>No problems for this project.</p>
                ) : (
                    problems.map((problem) => (
                        <li key={problem._id}>
                            {problem.description}
                            <SolutionList problemId={problem._id} />
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default ProjectList;
