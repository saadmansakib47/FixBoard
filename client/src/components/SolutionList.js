import React, { useState, useEffect } from 'react';
import { getSolutionsByProblemId } from '../api';
import CreateSolution from './CreateSolution';

const SolutionsList = ({ problemId }) => {
    const [solutions, setSolutions] = useState([]);

    useEffect(() => {
        const fetchSolutions = async () => {
            const data = await getSolutionsByProblemId(problemId);
            setSolutions(data);
        };

        fetchSolutions();
    }, [problemId]);

    return (
        <div>
            <CreateSolution problemId={problemId} onSolutionCreated={() => setSolutions([...solutions])} />
            <ul>
                {solutions.length === 0 ? (
                    <p>No solutions for this problem.</p>
                ) : (
                    solutions.map((solution) => (
                        <li key={solution._id}>
                            <p><strong>Tried:</strong> {solution.solutionAttempted}</p>
                            <p><strong>Worked:</strong> {solution.solutionWorked}</p>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default SolutionsList;
