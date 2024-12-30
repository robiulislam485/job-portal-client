import { useState } from "react";
import UseJobs from "../hooks/UseJobs";
import HotJobCard from "./Home/HotJobCard";

import { BiSearch } from "react-icons/bi";


const AllJob = () => {
    const [sort, setSort] = useState(false)
    const [search, setSearch] = useState("")
    const [minSalary, setMinSalary] = useState("")
    const [maxSalary, setMaxSalary] = useState("")
    const { jobs, loading } = UseJobs(sort, search, minSalary, maxSalary);
    if (loading) {
        return <h2>Job is loading</h2>
    }

    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-4 ">All Jobs</h1>
            <div className="max-w-7xl mx-auto p-4 flex items-center bg-base-200 gap-4">
                <button onClick={() => setSort(!sort)} className={`btn btn-neutral ${sort && 'btn-success'}`}>
                    {sort ? 'Sorted By' : 'Sort By'}
                </button>
                <BiSearch />
                <input onKeyUp={(e) => setSearch(e.target.value)} placeholder='Search by location' className="input w-full max-w-2xl" type="search" name="" id="" />


                <div className="max-w-xs space-y-3">
                    <input onKeyUp={(e) => setMinSalary(e.target.value)} placeholder='Min salary' className="input w-full max-w-2xl" type="number" name="" id="" />

                    <input onKeyUp={(e) => setMaxSalary(e.target.value)} placeholder='Max salary' className="input w-full max-w-2xl" type="number" name="" id="" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
                {
                    jobs?.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
                }
            </div>
        </div>
    );
};

export default AllJob;