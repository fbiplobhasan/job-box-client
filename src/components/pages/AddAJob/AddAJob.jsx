import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../../../hooks/UseAuth/UseAuth";

const AddAJob = () => {
  const { user } = UseAuth();
  const navigate = useNavigate();
  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData.entries());
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);
    const { min, max, currency, ...newJob } = initialData;
    console.log(newJob);
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    console.log(newJob);

    fetch("http://localhost:3000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Job has been added.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/myPostedJobs");
      });
  };
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg p-8">
      <h2 className="text-3xl font-bold text-center mb-6">🚀 Post a New Job</h2>

      <form onSubmit={handleAddJob} className="space-y-6">
        {/* Job Title & Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Job Location"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Job Type & Field */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            defaultValue="Pick a Job Type"
            name="jobType"
            className="select select-bordered w-full"
            required
          >
            <option disabled>Pick a Job Type</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Intern</option>
          </select>

          <select
            defaultValue="Pick a Job Field"
            name="category"
            className="select select-bordered w-full"
            required
          >
            <option disabled>Pick a Job Field</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Teaching</option>
          </select>
        </div>

        {/* Salary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="number"
            name="min"
            placeholder="Min Salary"
            className="input input-bordered w-full"
            required
          />
          <input
            type="number"
            name="max"
            placeholder="Max Salary"
            className="input input-bordered w-full"
            required
          />
          <select
            defaultValue="Currency"
            name="currency"
            className="select select-bordered w-full"
          >
            <option disabled>Currency</option>
            <option>BDT</option>
            <option>USD</option>
            <option>INR</option>
          </select>
        </div>

        {/* Description */}
        <textarea
          name="description"
          placeholder="Job Description"
          className="textarea textarea-bordered w-full"
          required
        ></textarea>

        {/* Company */}
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          className="input input-bordered w-full"
          required
        />

        {/* Requirements & Responsibilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <textarea
            name="requirements"
            placeholder="Requirements (one per line)"
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
          <textarea
            name="responsibilities"
            placeholder="Responsibilities (one per line)"
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
        </div>

        {/* HR Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="hr_name"
            placeholder="HR Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            name="hr_email"
            defaultValue={user?.email}
            placeholder="HR Email"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Deadline & Logo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="date"
            name="applicationDeadline"
            className="input input-bordered w-full"
            required
          />
          <input
            type="url"
            name="company_logo"
            placeholder="Company Logo URL"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Submit */}
        <div className="text-center">
          <button className="btn btn-primary w-full md:w-1/3">
            ✅ Submit Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAJob;
