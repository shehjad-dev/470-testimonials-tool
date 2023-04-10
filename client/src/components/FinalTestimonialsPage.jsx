import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";

const FinalTestimonialsPage = () => {
    const { formid } = useParams();
    const [apiData, setApiData] = useState([]);
    const [formData, setFormData] = useState({});
    const [isLoading, setIsLoading] = useState({});

    useEffect(() => {
        const getSubmissions = async (id) => {
            const response = await axios.get(
                `http://localhost:5000/api/submission/myactivesubmission/${id}`
            );
            setIsLoading(false);
            setApiData(response.data);
        };

        const getForm = async (id) => {
            const response = await axios.get(
                `http://localhost:5000/api/forms/${id}`
            );

            //setIsLoading(false);
            setFormData(response.data);
        };

        getForm(formid);

        getSubmissions(formid);
    }, []);

    const getAverageRating = () => {
        return (
            apiData.reduce((total, obj) => total + obj["ratingVal"], 0) /
            apiData.length
        );
    };
    return (
        <div className="bg-blue-950 text-white min-h-[100vh] max-w-7xl mx-auto flex items-center justify-center py-10">
            {isLoading ? (
                <div
                    className="lds-roller"
                    /* onClick={() => console.log(serviceForm)} */
                >
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            ) : (
                <div className="w-[620px] space-y-9">
                    <div className="flex gap-2 justify-between">
                        <h3
                            className="bg-white font-bold text-xl text-indigo-900 py-2 px-4 rounded-xl"
                            /* onClick={() => console.log(apiData)} */
                        >
                            {formData.title}
                        </h3>

                        <div className="text-lg py-2 px-4 font-semibold bg-violet-200 text-indigo-900 rounded-xl">
                            Average Rating: {getAverageRating()}
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        {apiData?.map((item, index) => (
                            <div
                                className="bg-indigo-900 bg-opacity-80 py-6 px-9 rounded-2xl"
                                key={item._id}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-4">
                                        <span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-12 h-12"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                        </span>
                                        <div>
                                            <h4 className="font-medium text-lg">
                                                {item.clientName}
                                            </h4>
                                            <p className="font-normal text-sm -skew-x-6">
                                                {item.clientDesignation}
                                            </p>
                                        </div>
                                    </div>
                                    {item.ratingVal !== 0 && (
                                        <div className="bg-violet-500 text-white rounded-xl w-fit flex gap-2 items-center py-2 px-4">
                                            <span className="text-xl">
                                                {item?.ratingVal}
                                            </span>
                                            <span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={2}
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div className="mt-8 flex gap-2">
                                    <span className="text-violet-500">
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
                                                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                                            />
                                        </svg>
                                    </span>
                                    <p className="text-base font-normal">
                                        {item.testimonialText}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div>
                        <Link
                            to={`http://localhost:5173/testimonials/${formid}/new`}
                            target="_blank"
                            className="bg-violet-500 hover:bg-violet-600 transition-all ease-in duration-75 border-2 border-violet-500 text-white py-2 px-4 flex gap-2 w-fit rounded-md"
                        >
                            <span>Leave your feedback ...</span>
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
                                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                    />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FinalTestimonialsPage;
