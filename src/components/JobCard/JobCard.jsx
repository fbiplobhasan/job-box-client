import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

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
    _id,
  } = job || {};
  return (
    <div className="card bg-base-100 shadow-xl hover:bg-base-300 hover:ease-in transition-colors">
      <figure>
        <img
          src={company_logo}
          alt={company}
          className="w-20 h-20 object-cover rounded-2xl p-2"
        />
      </figure>

      <div className="card-body">
        {/* Job Title & Company */}
        <h2 className="card-title ">{title}</h2>
        <p className="text-sm text-gray-500 ">{company}</p>

        {/* Location */}
        <p className="flex items-center gap-1 text-gray-600 text-sm hover:text-blue-300">
          <FaMapMarkerAlt /> {location}
        </p>

        {/* Job Type */}
        <p className="text-gray-700 text-sm ">
          💼 {jobType}
        </p>

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
        <p className="text-gray-600 text-sm mt-2 ">
          {description?.slice(0, 80)}...
        </p>

        {/* Apply Button */}
        <div className="card-actions justify-end mt-4">
          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary">Apply</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
