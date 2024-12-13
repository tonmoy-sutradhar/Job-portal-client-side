import { useParams } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  // const { user } = useContext(AuthContext);
  const { id } = useParams();

  // custom hook use
  const { user } = UseAuth();
  console.log(id, user);

  const handleSubmitJob = (e) => {
    e.preventDefault();
    const from = e.target;
    const linkedin = from.linkedin.value;
    const github = from.github.value;
    const resume = from.resume.value;

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedin,
      github,
      resume,
    };

    fetch("http://localhost:5000/job-applications", {
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
            title: "Apply Done",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
            },
          });
        }
        console.log(data, "job apply data");
      });

    console.log(linkedin, github, resume);
  };
  return (
    <div className="card bg-base-100 w-[70%] mx-auto   shadow-2xl my-5">
      <form onSubmit={handleSubmitJob} className="card-body">
        <h1 className="text-xl ">
          User email: <span className="text-orange-500">{user.email}</span>
        </h1>
        <h1 className="text-xl text-center font-bold text-blue-500">
          Good Job, Apply Now
        </h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkedIn</span>
          </label>
          <input
            type="url"
            name="linkedin"
            placeholder="LinkedIn Url"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">GitHub</span>
          </label>
          <input
            type="url"
            name="github"
            placeholder="GitHub Url"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume </span>
          </label>
          <input
            type="url"
            name="resume"
            placeholder="Resume Url"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply</button>
        </div>
      </form>
    </div>
  );
};

export default JobApply;
