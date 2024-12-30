import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/UseAuth';
import { Link } from 'react-router-dom';

const MyPostedJob = () => {
    const [myJob, setMyjob] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyjob(data);
            })
    }, [user.email])
    return (
        <div>
            <h2 className="text-3xl">My posted job:{myJob.length}</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Applications</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myJob.map((job, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{job.title}</td>
                                <td>
                                    <Link to={`/viewApplications/${job._id}`}>
                                        <button className="btn btn-link">View Application</button>
                                    </Link>
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyPostedJob;