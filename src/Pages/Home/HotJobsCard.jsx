import { FaDollarSign } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
const HotJobsCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    status,
    hr_email,
    hr_name,
    company_logo,
  } = job;
  return (
    <>
      <div className="card card-compact bg-base-100  shadow-xl">
        <div className="flex gap-2 m-2">
          <figure>
            <img className="w-16" src={company_logo} alt="Shoes" />
          </figure>
          <div>
            <h1 className="text-xl">{company}</h1>
            <p className="flex items-center gap-1">
              <span className="text-red-500">
                <MdLocationOn></MdLocationOn>
              </span>
              {location}
            </p>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="flex gap-2 flex-wrap mt-2 ">
            {requirements.map((r, indx) => (
              <p key={indx} className="border-2 rounded-md px-2 text-center">
                {r}
              </p>
            ))}
          </div>
          <div className="card-actions justify-end items-center mt-4">
            <p className="flex items-center">
              Salary: <FaDollarSign></FaDollarSign> {salaryRange.min} -{" "}
              {salaryRange.max}
            </p>
            <Link to={`/jobs/${_id}`} className="btn btn-primary">
              See Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotJobsCard;
