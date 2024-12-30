import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";


const HotJobCard = ({ job }) => {
    const { _id, title, company, company_logo, requirements, description, location, salaryRange } = job;
    return (

        <div className="card card-compact bg-base-100 shadow-xl">
            <div className="flex items-center gap-4 mt-4 ">
                <figure>
                    <img
                        className="w-14"
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div>
                    <h4>{company}</h4>
                    <p className="flex items-center gap-1">{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>

                <div className="flex gap-2 flex-wrap">
                    {
                        requirements?.map((skill, idx) => <p className="px-2 py-1 bg-base-200 rounded-md" key={idx}>{skill}</p>)
                    }
                </div>
                <div>
                    <h4>Salary: {salaryRange.min}-{salaryRange.max} {salaryRange.currency}$</h4>
                </div>
                <div className="card-actions justify-end items-center">
                    <Link to={`/jobs/${_id}`}>
                        <button className="btn btn-primary">Apply</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;