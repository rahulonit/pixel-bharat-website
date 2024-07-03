import { useEffect } from 'react';
import config from '../config';

export const Projectsdata = [];

const fetchProjectsData = async () => {
  try {
    const response = await fetch(`${config.apiUrl}api/projects`);
    const data = await response.json();

    // Clear existing data
    Projectsdata.length = 0;

    // Map fetched data and populate Projectsdata array
    data.forEach(project => {
      Projectsdata.push({
        id: project._id,
        title: project.title,
        description: project.description,
        image: `${config.apiUrl}${project.image}`, // Adjust path if needed
        category: project.category
      });
    });

    console.log('Projectsdata populated:', Projectsdata);
  } catch (error) {
    console.error('Error fetching projects:', error);
  }
};

const ProjectDataFetcher = () => {
  useEffect(() => {
    fetchProjectsData();
  }, []);

  return null; // This component doesn't render anything
};

export default ProjectDataFetcher;
