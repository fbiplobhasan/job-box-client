import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
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
    _id
  } = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
      {/* Header Section */}
      <div className="flex items-center gap-6">
        <img
          src={company_logo}
          alt={company}
          className="w-20 h-20 object-contain rounded-lg border p-2"
        />
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-gray-600">
            {company} • {location}
          </p>
          <p className="text-sm text-blue-500 font-semibold">
            {jobType} • {category}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Job Description</h2>
        <p className="text-gray-700">{description}</p>
      </div>

      {/* Requirements */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Requirements</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {requirements?.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul>
      </div>

      {/* Responsibilities */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Responsibilities</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {responsibilities?.map((res, i) => (
            <li key={i}>{res}</li>
          ))}
        </ul>
      </div>

      {/* Job Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 bg-gray-50 p-4 rounded-lg">
        <p>
          <span className="font-semibold">Salary:</span> {salaryRange.min} -{" "}
          {salaryRange.max} {salaryRange.currency.toUpperCase()}
        </p>
        <p>
          <span className="font-semibold">Deadline:</span> {applicationDeadline}
        </p>
        <p>
          <span className="font-semibold">Status:</span> {status}
        </p>
      </div>

      {/* HR Info */}
      <div className="mt-6 border-t pt-4">
        <h2 className="text-lg font-semibold mb-2">Contact HR</h2>
        <p>
          <span className="font-semibold">Name:</span> {hr_name}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {hr_email}
        </p>
      </div>

      {/* Apply Button */}
      <div className="mt-8 text-center">
        <Link to={`/jobApply/${_id}`}>
          <button className="btn btn-primary px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
