import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const FormSubmissions = () => {
    const notyf = new Notyf();
    const createLinkRef = useRef();
    const shareLinkRef = useRef();
    const { formid } = useParams();

    const userInfo = useUser();

    const [apiData, setApiData] = useState([]);
    const [formData, setFormData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getSubmissions = async (id) => {
            const response = await axios.get(
                `http://localhost:5000/api/submission/mysubmission/${id}`
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
    }, [userInfo]);

    const handleCopyClick = (e) => {
        if (e.target.name === "createLinkCopyBtn") {
            navigator.clipboard.writeText(createLinkRef.current.value);
        } else {
            navigator.clipboard.writeText(shareLinkRef.current.value);
        }
        notyf.success("Link copied Successfully");
    };

    const toggleStatus = (sID) => {
        const editForm = async (id) => {
            const response = await axios.put(
                `http://localhost:5000/api/submission/${id}`
            );

            //const response = await axios.put(`/jobs/${id}`, data);

            //console.log(response.data);
            //setIsLoading(false);

            //setApiData(response.data);
        };

        editForm(sID);
    };
    return (
        <div className="p-10 w-full">
            <div className="flex flex-col justify-between gap-4">
                {formData.status === "Active" ? (
                    <>
                        <div className="bg-indigo-2 p-3 border-2 rounded-md shadow-sm">
                            <p className="font-semibold">
                                Link for creating testimonial
                            </p>
                            <div className="flex items-center gap-3">
                                <input
                                    className="bg-white border-2 border-indigo-500 w-[600px] py-2 px-4 rounded-md"
                                    value={`http://localhost:5173/testimonials/${formid}/new`}
                                    readOnly
                                    ref={createLinkRef}
                                />
                                <button
                                    className="bg-indigo-500 text-white p-2 rounded-md"
                                    onClick={handleCopyClick}
                                    name="createLinkCopyBtn"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 pointer-events-none"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="bg-indigo-2 p-3 border-2 rounded-md shadow-sm">
                            <p className="font-semibold">
                                Link for sharing testimonials
                            </p>
                            <div className="flex items-center gap-3">
                                <input
                                    className="bg-white border-2 border-indigo-500 w-[600px] py-2 px-4 rounded-md"
                                    value={`http://localhost:5173/testimonials/${formid}`}
                                    readOnly
                                    ref={shareLinkRef}
                                />
                                <button
                                    className="bg-indigo-500 text-white p-2 rounded-md"
                                    onClick={handleCopyClick}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 pointer-events-none"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex gap-2 items-center">
                        <p>Make the form active in the edit page - </p>
                        <Link
                            to={`/forms/${formid}/edit`}
                            className="bg-indigo-900 opacity-80 text-white py-2 px-4 text-md rounded-md"
                        >
                            Edit the Form
                        </Link>
                    </div>
                )}

                <h3
                    className="font-bold text-lg mt-6"
                    /* onClick={() => console.log(apiData)} */
                >
                    Submissions for form-{" "}
                    <span className="bg-white py-2 px-4 rounded-sm text-indigo-900">
                        "{formData.title}"
                    </span>
                </h3>
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
                                Client Name
                            </th>
                            <th className="bg-indigo-100 text-left px-6 py-3">
                                Client Designation
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
                                Toggle Status
                            </th>
                            {/* <th className="bg-indigo-100 text-left px-6 py-3">
                        {" "}
                    </th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {apiData.map((item, index) => (
                            <tr className="p-5" key={item._id}>
                                <td className="px-6 py-3">{index + 1}</td>
                                <td className="px-6 py-3">{item.clientName}</td>
                                <td className="px-6 py-3">
                                    {item.clientDesignation}
                                </td>
                                {/* <td className="px-6 py-3">
                            {item.testimonial.toString()}
                        </td> */}
                                <td className="px-6 py-3">{item.ratingVal}</td>

                                <td className="px-6 py-3">
                                    {item.testimonialText}
                                </td>
                                <td className="px-6 py-3">
                                    {item.show ? "Visible" : "Hidden"}
                                </td>
                                <td className="px-6 py-3">
                                    <button
                                        className="bg-indigo-900 text-white rounded-md p-2 w-fit flex gap-2"
                                        onClick={() => toggleStatus(item._id)}
                                    >
                                        {/* <span>Toggle Staus</span> */}
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
                                                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
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

export default FormSubmissions;
