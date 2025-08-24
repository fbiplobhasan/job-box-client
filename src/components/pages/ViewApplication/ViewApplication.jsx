import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplication = () => {
  const applications = useLoaderData();

  const handleStatusUpdate = (e, id) => {
    console.log(e.target.value);
    const data = {
      status: e.target.value,
    };
    fetch(`http://localhost:3000/job-applications/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Job has been updated.",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
      });
  };

  return (
    <div>
      <h2>Applications for this job {applications.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Status</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{app.applicant_email}</td>
                <td>{app.title}</td>
                <td>
                  <select
                    onChange={(e) => handleStatusUpdate(e, app._id)}
                    defaultValue={app.status || "Change Status"}
                    className="select select-sm"
                  >
                    <option disabled={true}>Change Status</option>
                    <option>Under Review</option>
                    <option>Set Interview</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplication;
