import { useEffect } from 'react';
import config from '../config';

const fetchJobData = async (setJobs) => {
  try {
    const response = await fetch(`${config.apiUrl}api/careers`);
    const data = await response.json();

    const jobs = data.map(job => ({
      id: job._id,
      title: job.title,
      positions: job.positions,
      location: job.location,
      category: job.category,
      skills: job.skills,
      responsibilities: job.responsibilities,
      description: job.description,
      about: job.about,
      keyResponsibilities: job.keyResponsibilities,
      keyResposibilty: job.keyResposibilty,
      niceToHave: job.niceToHave,
      salary: job.salary,
      exchangeProgram: job.exchangeProgram,
      greatWorkPlace: job.greatWorkPlace,
      service: job.service
    }));

    setJobs(jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
  }
};

const JobDataFetcher = ({ setJobs }) => {
  useEffect(() => {
    fetchJobData(setJobs);
  }, [setJobs]);

  return null; // This component doesn't render anything
};

export default JobDataFetcher;
