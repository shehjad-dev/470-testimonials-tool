import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";

const MyForms = () => {
    const userInfo = useUser();

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/forms/myforms/${userInfo.user.id}`)
            .then((response) => response.json())
            .then((data) => setApiData(data));
    }, [userInfo]);
    return (
        <div className="p-10 w-full">
            <div className="flex items-center justify-between">
                <h3
                    className="font-medium"
                    onClick={() => console.log(apiData)}
                >
                    My Forms
                </h3>
                <Link className="flex gap-2 bg-indigo-700 text-white py-2 px-4 rounded-xl">
                    <span>Add</span>
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </span>
                </Link>
            </div>

            <table className="table-fixed w-full mt-5">
                <thead>
                    <tr>
                        <th className="bg-indigo-100 text-left px-6 py-3">
                            SL
                        </th>
                        <th className="bg-indigo-100 text-left px-6 py-3">
                            Title
                        </th>
                        <th className="bg-indigo-100 text-left px-6 py-3">
                            Rating
                        </th>
                        <th className="bg-indigo-100 text-left px-6 py-3">
                            Testimonial
                        </th>
                        <th className="bg-indigo-100 text-left px-6 py-3">
                            Status
                        </th>
                        <th className="bg-indigo-100 text-left px-6 py-3">
                            Submissions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {apiData.map((item) => (
                        <tr className="p-5" key={item._id}>
                            <td className="px-6 py-3">1</td>
                            <td className="px-6 py-3">{item.title}</td>
                            <td className="px-6 py-3">{item.rating}</td>
                            <td className="px-6 py-3">{item.testimonial}</td>
                            <td className="px-6 py-3">{item.status}</td>
                            <td className="px-6 py-3">See Submissions</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyForms;
