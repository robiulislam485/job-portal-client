import { Link, useLoaderData } from "react-router-dom";


const JobDetail = () => {
    const { _id, title, company, company_logo, requirements, description, location, salaryRange, category, applicationDeadline, hr_email, responsibilities } = useLoaderData()

    return (
        <div className="bg-gray-100 p-4">
            <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    {/* Company Logo */}
                    <div className="md:w-1/4 p-4 flex items-center justify-center bg-gray-100">
                        <img
                            src={company_logo}
                            alt="Company Logo"
                            className="h-24 w-24 object-contain"
                        />
                    </div>

                    {/* Job Details */}
                    <div className="md:w-3/4 p-6">
                        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
                        <p className="text-sm text-gray-500 mt-1">{location}</p>
                        <div className="mt-4">
                            <span className="text-gray-600 text-sm font-semibold">Category:</span> {category}
                        </div>
                        <div className="mt-1">
                            <span className="text-gray-600 text-sm font-semibold">Salary:</span> {salaryRange.min}-{salaryRange.max}{salaryRange.currency}$
                        </div>
                        <div className="mt-1">
                            <span className="text-gray-600 text-sm font-semibold">Deadline:</span> {applicationDeadline}
                        </div>

                        {/* Job Description */}
                        <div className="mt-6">
                            <h2 className="text-lg font-semibold text-gray-800">Description:</h2>
                            <p className="text-gray-700 mt-2"> {description}</p>
                        </div>

                        {/* Responsibilities */}
                        <div className="mt-6">
                            <h2 className="text-lg font-semibold text-gray-800">Responsibilities:</h2>
                            {
                                responsibilities.map((skill, idx) => <p key={idx}>{skill}</p>)
                            }
                        </div>

                        {/* Requirements */}
                        <div className="mt-6">
                            <h2 className="text-lg font-semibold text-gray-800">Requirements:</h2>
                            {
                                requirements.map((skill, idx) => <p key={idx}>{skill}</p>)
                            }
                        </div>

                        {/* Contact Information */}
                        <div className="mt-6 border-t pt-4">
                            <p className="text-sm text-gray-600">For any inquiries, contact:</p>
                            <p className="text-gray-800 font-medium">{hr_email}</p>
                        </div>
                        <Link to={`/jobApply/${_id}`}>
                            <button className="btn btn-primary mt-4 ">Apply Now!</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetail;

// {
//     "_id": "675bbca045a1047b08fd6998",
//     "title": "Mobile App Developer",
//     "location": "Bashundhara, Dhaka",
//     "jobType": "Hybrid",
//     "category": "Development",
//     "applicationDeadline": "2024-12-25",
//     "salaryRange": {
//         "min": 50000,
//         "max": 80000,
//         "currency": "bdt"
//     },
//     "description": "Develop and maintain mobile applications for Android and iOS platforms.",
//     "company": "AppCrafter",
//     "requirements": [
//         "Flutter",
//         "Kotlin",
//         "Swift",
//         "Firebase"
//     ],
//     "responsibilities": [
//         "Develop mobile apps",
//         "Ensure app performance",
//         "Collaborate with backend teams"
//     ],
//     "status": "active",
//     "hr_email": "jobs@appcrafter.com",
//     "hr_name": "Tareq Anwar",
//     "company_logo": "https://i.ibb.co/BLVwZzZ/icons8-whatsapp-logo-94.png"
// }