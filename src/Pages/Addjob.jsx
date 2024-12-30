import Swal from "sweetalert2";
import useAuth from "../hooks/UseAuth";
import { useNavigate } from "react-router-dom";


const Addjob = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const handleAddJob = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        const { min, max, currency, ...newJob } = initialData;
        newJob.salaryRange = { min: parseInt(min), max: parseInt(max), currency };
        newJob.responsibilities = newJob.responsibilities.split('\n');
        newJob.requirements = newJob.requirements.split('\n');
        console.log(newJob);

        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Job Has Been Added Succesfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myPostedJob')
                }
            })

    }
    return (
        <div>
            <h2 className="text-3xl text-center">Post a job</h2>
            <form onSubmit={handleAddJob} className="card-body">
                {/* Company Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input type="text" name='company' placeholder="Company Name" className="input input-bordered" required />
                </div>
                {/* Job Title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" name='title' placeholder="Job title" className="input input-bordered" required />
                </div>
                {/* Job Location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Location</span>
                    </label>
                    <input type="text" name='location' placeholder="Job Location" className="input input-bordered" required />
                </div>
                {/* Job Category */}
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Job Category</span>
                    </label>
                    <select defaultValue='Pick a job category' name='category' className="select select-bordered w-full">
                        <option disabled>Pick a job category</option>
                        <option>Full-time</option>
                        <option>Intern</option>
                        <option>Part-time</option>
                    </select>
                </div>
                {/* Job Field */}
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Job Field</span>
                    </label>
                    <select defaultValue='Pick job field' name='field' className="select select-bordered w-full ">
                        <option disabled>Pick job field</option>
                        <option>Engineering</option>
                        <option>Finance</option>
                        <option>Marketing</option>
                        <option>Teaching</option>
                    </select>
                </div>
                {/* Salary Range */}
                <div className="grid grid-cols-1 lg:grid-cols-3 items-end gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Salary Range</span>
                        </label>
                        <input type="number" name='min' placeholder="Minmum salary" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="number" name='max' placeholder="Maximum salary" className="input input-bordered" required />
                    </div>

                    <div className="form-control ">
                        <select defaultValue='Pick Currency' name='salaryRange' className="select select-bordered w-full ">
                            <option disabled >Pick Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>INR</option>
                        </select>
                    </div>
                </div>
                {/* Job Description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Description</span>
                    </label>
                    <textarea name="description" className="textarea textarea-bordered" placeholder="Job Description" required></textarea>
                </div>
                {/* Job Requirments */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Requirments</span>
                    </label>
                    <textarea name="requirements" className="textarea textarea-bordered" placeholder="Put each requirment In a new line" required></textarea>
                </div>
                {/* Job Responsibilities */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Responsibilities</span>
                    </label>
                    <textarea name="responsibilities" className="textarea textarea-bordered" placeholder="Put each responsibilities In a new line" required></textarea>
                </div>
                {/* Hr Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Name</span>
                    </label>
                    <input type="text" name='hr_name' placeholder="HR Name" className="input input-bordered" required />
                </div>
                {/* Hr Email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Email</span>
                    </label>
                    <input readOnly defaultValue={user?.email} type="email" name='hr_email' placeholder="HR Email" className="input input-bordered" required />
                </div>
                {/* Company Logo */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Logo</span>
                    </label>
                    <input type="text" name='company_logo' placeholder="Company logo URL" className="input input-bordered" required />
                </div>
                {/* application Deadline*/}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Deadline</span>
                    </label>
                    <input type="date" name='applicationDeadline' placeholder="Deadline" className="input input-bordered" required />
                </div>


                {/* Submit Button */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Post Job</button>
                </div>
            </form>
        </div>
    );
};

export default Addjob;





// _id
// 675bbca045a1047b08fd6991
// title
// "Finance Manager"
// location
// "Gulshan, Dhaka"
// jobType
// "Part-Time"
// category
// "Finance"
// applicationDeadline
// "2024-12-20"

// salaryRange
// Object
// description
// "We are hiring a Finance Manager to oversee financial operations, budge…"
// company
// "Local Inch Ltd"

// requirements
// Array (4)

// responsibilities
// Array (3)
// status
// "active"
// hr_email
// "finance.hr@securefinance.com"
// hr_name
// "Md. Alamgir"
// company_logo
// "https://i.ibb.co/T1XRmbX/linkedin.png"
