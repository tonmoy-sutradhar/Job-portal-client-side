import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplication = () => {
  const applications = useLoaderData();
  // console.log(applications);
  const handleStatusUpdate = (e, id) => {
    e.preventDefault();
    const data = {
      status: e.target.value,
    };
    fetch(`http://localhost:5000/job-applications/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Status has been update",
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
        console.log(data);
      });
    console.log(e.target.value, id);
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
                    onChange={(e) => handleStatusUpdate(e, app._id)}
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
