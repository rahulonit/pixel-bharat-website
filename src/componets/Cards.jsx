import React from 'react';
import { Projectsdata } from '../data/Projectsdata';

function filterProjects(projects, filter) {
  if (filter === "All") {
    return projects;
  }
  return projects.filter(project => project.category === filter);
}

function truncateDescription(description, wordLimit) {
  const words = description.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return description;
}

export default function Cards({ selectedFilter }) {
  const filteredProjects = filterProjects(Projectsdata, selectedFilter);

  return (
    <div className="grid justify-center gap-8 px-8 py-10 grid-cols-1 lg:grid-cols-3">
      {filteredProjects.map((item) => (
        <div className="w-full overflow-hidden flex flex-col gap-4" key={item.id}>
          <div className="rounded-[24px] relative overflow-hidden">
            <img src={item.image} alt="" className="w-full h-full object-cover rounded-[24px]" />
            <h1 className="inline-flex absolute font-bold  top-0 right-0 w-fit p-[16px] m-4 justify-center items-start gap-[8px] rounded-[100px] bg-[var(--Default-White,_#FFF)]">
              {item.category}
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-xl mb-2">{item.title}</h1>
            <p className="text-gray-700 text-base">
              {truncateDescription(item.description, 30)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
