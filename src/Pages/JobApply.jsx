import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/UseAuth";
import Swal from "sweetalert2";


const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleJobApply = e => {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;
        // console.log(linkedin, github, resume);

        const jobApplication = {
            job_id: id,
            appliciant_email: user.email,
            linkedin,
            github,
            resume
        };

        fetch('http://localhost:5000/job-applications', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Apply Submitted Succesfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                 navigate('/myApplications')
                }

            })
    }
    return (
        <div className="card bg-base-100 w-full  shrink-0 shadow-2xl my-10">
            <form onSubmit={handleJobApply} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">LinkedIn URL</span>
                    </label>
                    <input type="url" name='linkedin' placeholder="LinkedIn URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">GitHub URL</span>
                    </label>
                    <input type="url" placeholder="GitHub URL" name='github' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resume URL</span>
                    </label>
                    <input type="url" placeholder="Resume URL" name='resume' className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Apply</button>
                </div>
            </form>
        </div>
    );
};

export default JobApply;