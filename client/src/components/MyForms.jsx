import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";

const MyForms = () => {
    const userInfo = useUser();

    const [apiData, setApiData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getForms = async (id) => {
            const response = await axios.get(
                `http://localhost:5000/api/forms/myforms/${id}`
            );
            setIsLoading(false);

            setApiData(response.data);
        };

        getForms(userInfo.user.id);
    }, [userInfo]);

    const deleteForm = async (id) => {
        const response = await axios.delete(
            `http://localhost:5000/api/forms/${id}`
        );
    };
    return (
        <div className="p-10 w-full">
            <div className="flex items-center justify-between">
                <h3
                    className="font-medium"
                    onClick={() => console.log(apiData)}
                >
                    My Forms
                </h3>
                <Link
                    className="flex gap-2 bg-indigo-700 text-white py-2 px-4 rounded-xl"
                    to={"/forms/new"}
                >
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
            {isLoading ? (
                <div>Loading ....</div>
            ) : (
                <table className="table-auto w-full mt-5">
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
                            {/* <th className="bg-indigo-100 text-left px-6 py-3">
                                Submissions
                            </th> */}
                            <th className="bg-indigo-100 text-left px-6 py-3">
                                {" "}
                            </th>
                            <th className="bg-indigo-100 text-left px-6 py-3">
                                {" "}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {apiData.map((item, index) => (
                            <tr className="p-5" key={item._id}>
                                <td className="px-6 py-3">{index + 1}</td>
                                <td className="px-6 py-3">{item.title}</td>
                                <td className="px-6 py-3">
                                    {item.rating.toString()}
                                </td>
                                <td className="px-6 py-3">
                                    {item.testimonial.toString()}
                                </td>
                                <td className="px-6 py-3">{item.status}</td>
                                {/* <td className="px-6 py-3">
                                    <p className="bg-indigo-600 bg-opacity-80 text-white rounded-sm py-2 px-4 w-fit flex gap-2">
                                        See Submissions
                                    </p>
                                </td> */}
                                <td className="px-6 py-3">
                                    <Link
                                        to={`/forms/${item._id}/edit`}
                                        className="bg-indigo-600 bg-opacity-80 text-white rounded-full p-2 w-fit flex gap-2"
                                    >
                                        {/* <span>Edit</span> */}
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
                                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                                />
                                            </svg>
                                        </span>
                                    </Link>
                                </td>
                                <td className="px-6 py-3">
                                    <button
                                        className="bg-red-100 bg-opacity-80 text-red-600 rounded-md p-2 w-fit flex gap-2"
                                        onClick={() => deleteForm(item._id)}
                                    >
                                        {/* <span>Delete</span> */}
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
                                                    d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                                                />
                                            </svg>
                                        </span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default MyForms;
