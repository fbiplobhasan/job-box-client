import React, { useEffect, useState } from "react";
import UseAuth from "../../../hooks/UseAuth/UseAuth";
import axios from "axios";
import useAxiosSecure from "./../../../hooks/useAxiosSecure/useAxiosSecure";

const MyApplication = () => {
  const { user } = UseAuth();
  const [jobs, setJobs] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    // fetch(`https://https://job-box-server-orcin.vercel.app/job-application?email=${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setJobs(data);
    //   });
    // axios.get(`https://https://job-box-server-orcin.vercel.app/job-application?email=${user.email}`, {
    //     withCredentials: true,
    //   })
    //   .then((res) => {
    //     setJobs(res.data);
    //     console.log(res.data);
    //   });

    axiosSecure
      .get(`/job-application?email=${user.email}`)
      .then((res) => {
        console.log("sever response:", res.data);
        setJobs(res.data);
      })
      .catch((err) => console.log(err));
  }, [user.email]);
  return (
    <div>
      <h2>My Application: {jobs.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>applicationDeadline</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {jobs.map((job) => (
              <tr key={job._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.hr_name}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {job.company}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {job.jobType}
                  </span>
                </td>
                <td>{job.applicationDeadline}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">X</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication;
