import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const { title, company, applicationDeadline } = useLoaderData();
  // console.log(jobDetailsLoader);
  return (
    <div className="text-center border-2 border-blue-700 rounded-lg p-3">
      <h1 className="text-3xl font-bold ">{title}</h1>
      <h1 className="text-xl">{company}</h1>
      <p>Deadline: {applicationDeadline}</p>

      <button className="btn btn-primary mt-5">Apply Now</button>
    </div>
  );
};

export default JobDetails;
