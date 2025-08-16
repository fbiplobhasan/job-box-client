import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";

const JobCard = ({ job }) => {
  const {
    company_logo,
    hr_name,
    hr_email,
    status,
    responsibilities,
    requirements,
    company,
    description,
    salaryRange,
    applicationDeadline,
    category,
    jobType,
    title,
    location,
  } = job || {};
  console.log(job);
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={company_logo}
          alt={company}
          className="w-full h-48 object-cover"
        />
      </figure>

      <div className="card-body">
        {/* Job Title & Company */}
        <h2 className="card-title">{title}</h2>
        <p className="text-sm text-gray-500">{company}</p>

        {/* Location */}
        <p className="flex items-center gap-1 text-gray-600 text-sm">
          <FaMapMarkerAlt /> {location}
        </p>

        {/* Job Type */}
        <p className="text-gray-700 text-sm">💼 {jobType}</p>

        {/* Salary */}
        <div>
          <p className="flex items-center gap-2">
            {" "}
            <FaDollarSign />
            Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
          </p>
        </div>
        <div>
          {requirements.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-2">
          {description?.slice(0, 80)}...
        </p>

        {/* Apply Button */}
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
