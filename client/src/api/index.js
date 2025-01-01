import axios from 'axios';

// Create a new project
export const createProject = async (name, techStack) => {
    try {
        const response = await axios.post('http://localhost:5000/api/projects/create', { name, techStack });
        return response.data;
    } catch (error) {
        console.error('Error creating project:', error);
        return null;
    }
};

// Get all projects
export const getProjects = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/projects');
        return response.data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
};

// Create a new problem
export const createProblem = async (projectId, description) => {
    try {
        const response = await axios.post('http://localhost:5000/api/problems/create', { projectId, description });
        return response.data;
    } catch (error) {
        console.error('Error creating problem:', error);
        return null;
    }
};

// Get problems for a specific project
export const getProblemsByProjectId = async (projectId) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/problems/project/${projectId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching problems:', error);
        return [];
    }
};

// Create a new solution
export const createSolution = async (problemId, solutionAttempted, solutionWorked) => {
    try {
        const response = await axios.post('http://localhost:5000/api/solutions/create', { problemId, solutionAttempted, solutionWorked });
        return response.data;
    } catch (error) {
        console.error('Error creating solution:', error);
        return null;
    }
};

// Get solutions for a problem
export const getSolutionsByProblemId = async (problemId) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/solutions/problem/${problemId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching solutions:', error);
        return [];
    }
};
