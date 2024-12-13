import React, { useEffect, useState } from "react";
import UseAuth from "../../Hook/UseAuth";

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
    </div>
  );
};

export default PostJob;
