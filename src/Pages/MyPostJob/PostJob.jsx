import React, { useEffect, useState } from "react";
import UseAuth from "../../Hook/UseAuth";
import { Link } from "react-router-dom";

const PostJob = () => {
  const { user } = UseAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        console.log(data, "Post job data");
      });
  }, [user.email]);

  return (
    <div>
      <h1>My posted job {jobs.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>DeadLine</th>
              <th>Application Count</th>
              <th>View Application</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={job._id}>
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td>{job.application}</td>
                <td>
                  <Link to={`/viewApplication/${job._id}`}>
                    {" "}
                    <button btn className="bg-blue-400 text-white p-1">
                      View Application
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostJob;

// email: tonmoy@gmail.com
// pass: 123456
