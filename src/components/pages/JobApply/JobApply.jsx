import { useNavigate, useParams } from "react-router-dom";
import UseAuth from "../../../hooks/UseAuth/UseAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const { user } = UseAuth();
  const navigate = useNavigate();

  const submitJobApplication = (e) => {
    e.preventDefault();

    const form = e.target;

    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;
    // console.log(linkedIn, github, resume);

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedIn,
      github,
      resume,
    };
    fetch("http://localhost:3000/job-application", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/myApplications')
        }
      });
  };
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-5xl font-bold text-center">Apply now!</h1>
      <form onSubmit={submitJobApplication} className="">
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkedIn URL</span>
          </label>
          <input
            type="url"
            name="linkedIn"
            placeholder="LinkedIn URL"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-400"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github URL</span>
          </label>
          <input
            type="url"
            name="github"
            placeholder="Github URL"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-400"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume URL</span>
          </label>
          <input
            type="url"
            name="resume"
            placeholder="Resume URL"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-400"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-400">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobApply;
