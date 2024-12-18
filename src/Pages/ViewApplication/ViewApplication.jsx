import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewApplication = () => {
  const applications = useLoaderData();
  // console.log(applications);
  const handleStatusUpdate = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <div>
      <h1>View Application{applications.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>GitHub</th>
              <th>Linkedin</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, ind) => (
              <tr key={app._id}>
                <th>{ind + 1}</th>
                <td>{app.applicant_email}</td>
                <td>{app.github}</td>
                <td>{app.linkedin}</td>
                <td>
                  <select
                    onChange={handleStatusUpdate}
                    defaultValue={app.Status || "Change Status"}
                    className="select select-bordered select-xs w-full max-w-xs"
                  >
                    <option disabled>Change Status</option>
                    <option>Pending</option>
                    <option>Set InterView</option>
                    <option>Hired</option>
                    <option>Reject</option>
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
