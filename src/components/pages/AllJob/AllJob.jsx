import React, { useState } from "react";
import useJobs from "../../../hooks/useJob/useJobs";
import JobCard from "../../JobCard/JobCard";
import { FaSearch } from "react-icons/fa";

const AllJob = () => {
  const [sort, setSort] = useState(false);
  const [search, setSearch] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const { jobs, loading } = useJobs(sort, search,minSalary,maxSalary);
  console.log(sort);
  if (loading) {
    return <h1 className="text-black text-center">Loading...</h1>;
  }
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-5">All Jobs</h1>
      <div className="w-11/12 mx-auto bg-base-200 py-5 p-3 flex items-center gap-5">
        <button
          onClick={() => setSort(!sort)}
          className={`btn btn-neutral ${sort && "btn-success"}`}
        >
          {sort == true ? "Sorted by salary" : "Sort by salary"}
        </button>
        <FaSearch />
        <input
          onKeyUp={(e) => setSearch(e.target.value)}
          className="w-full max-w-2xl p-2"
          type="text"
          name=""
          placeholder="Search Jobs by Location"
          id=""
        />
        <div className="space-y-3">
          <input
            onKeyUp={(e) => setMinSalary(e.target.value)}
            className="w-full max-w-xs p-2"
            type="text"
            name=""
            placeholder="Search by Min salary"
            id=""
          />
          <input
            onKeyUp={(e) => setMaxSalary(e.target.value)}
            className="w-full max-w-xs p-2"
            type="text"
            name=""
            placeholder="Search by Max salary"
            id=""
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default AllJob;
