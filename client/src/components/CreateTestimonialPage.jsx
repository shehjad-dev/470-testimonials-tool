import React, { useState, useEffect } from "react";
import axios from "axios";

import { useParams, useNavigate } from "react-router-dom";

const CreateTestimonialPage = () => {
    const navigate = useNavigate();
    const { formid } = useParams();
    /* const [currentRatingVal, setCurrentRatingVal] = useState(0); */
    const ratingData = [1, 2, 3, 4, 5];

    const [serviceForm, setServiceForm] = useState({});

    const [isLoading, setIsLoading] = useState(true);
    const [testimonialData, setTestimonialData] = useState({
        ratingVal: 0,
        testimonialText: "",
        show: true,
        formId: formid,
        clientName: "",
        clientDesignation: "",
    });

    useEffect(() => {
        const getForm = async (id) => {
            const response = await axios.get(
                `http://localhost:5000/api/forms/${id}`
            );
            setIsLoading(false);
            setServiceForm(response.data);
        };

        getForm(formid);
    }, [formid]);

    const handleFormDataChange = (e) => {
        if (e.target.name === "myfeedback") {
            setTestimonialData({
                ...testimonialData,
                testimonialText: e.target.value,
            });
        } else if (e.target.name === "myname") {
            setTestimonialData({
                ...testimonialData,
                clientName: e.target.value,
            });
        } else {
            setTestimonialData({
                ...testimonialData,
                clientDesignation: e.target.value,
            });
        }
    };

    const handleRatingClick = (val) => {
        //setCurrentRatingVal(val);
        setTestimonialData({
            ...testimonialData,
            ratingVal: val,
        });
    };

    const handleFormSubmission = async (e) => {
        e.preventDefault();
        const postSubmission = async (fID) => {
            const response = await axios.post(
                `http://localhost:5000/api/submission`,
                {
                    ...testimonialData,
                    formId: fID,
                }
            );
            return response;

            /* setIsLoading(false); */
            /* setApiData(response.data); */
        };
        const response = await postSubmission(formid);
        //console.log(response);

        setTestimonialData({
            ratingVal: 0,
            testimonialText: "",
            show: true,
            formId: formid,
            clientName: "",
            clientDesignation: "",
        });
        if (response.status === 200) {
            navigate("/submission/success");
        } else {
            navigate("/submission/error");
        }
        //navigate("/forms");
    };

    return (
        <div className="bg-blue-950 text-white min-h-[100vh] max-w-7xl mx-auto flex items-center justify-center">
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
                <div className="flex flex-col gap-3 min-w-[400px]">
                    <h3
                        className="bg-white font-bold text-xl text-indigo-900 py-2 px-4 rounded-xl max-w-[420px]"
                        /* onClick={() => console.log(testimonialData)} */
                    >
                        &quot;{serviceForm.title}
                        &quot;
                    </h3>
                    {serviceForm.rating && (
                        <div className="bg-indigo-900 bg-opacity-80 p-8 rounded-xl flex flex-col gap-3">
                            <h3 className="font-medium flex gap-2">
                                <span>Leave a rating</span>{" "}
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
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                        />
                                    </svg>
                                </span>
                            </h3>
                            <div className="flex items-center justify-between">
                                {ratingData.map((item, index) => (
                                    <button
                                        className={`${
                                            item > testimonialData.ratingVal
                                                ? "bg-transparent"
                                                : "bg-violet-600"
                                        } text-white w-10 h-10 rounded-full border-2 border-violet-600 transition-all ease-in duration-75`}
                                        onClick={() => handleRatingClick(item)}
                                        key={index}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <form
                        className="bg-indigo-900 bg-opacity-80 p-8 rounded-xl flex flex-col gap-3"
                        onSubmit={(e) => handleFormSubmission(e)}
                    >
                        <div className="space-y-1 flex flex-col gap-1 mb-6">
                            <label htmlFor="myname" className="font-medium">
                                My Name
                            </label>
                            <input
                                required
                                className="bg-white bg-opacity-10 border-2 text-white border-indigo-900 py-2 px-4 rounded-md"
                                type="text"
                                name="myname"
                                value={testimonialData.clientName}
                                onChange={handleFormDataChange}
                            />
                        </div>
                        <div className="space-y-1 flex flex-col gap-1 mb-6">
                            <label
                                htmlFor="mydesignation"
                                className="font-medium"
                            >
                                My Designation
                            </label>
                            <input
                                required
                                className="bg-white bg-opacity-10 border-2 text-white border-indigo-900 py-2 px-4 rounded-md"
                                type="text"
                                name="mydesignation"
                                value={testimonialData.clientDesignation}
                                onChange={handleFormDataChange}
                            />
                        </div>
                        {serviceForm.testimonial && (
                            <div className="space-y-1 flex flex-col gap-1 mb-6">
                                <label
                                    htmlFor="myfeedback"
                                    className="font-medium"
                                >
                                    Leave your feedback...
                                </label>
                                <textarea
                                    required
                                    className="bg-white bg-opacity-10 border-2 text-white border-indigo-900 py-2 px-4 rounded-md"
                                    type="text"
                                    name="myfeedback"
                                    value={testimonialData.testimonialText}
                                    onChange={handleFormDataChange}
                                />
                            </div>
                        )}

                        <button
                            type="submit"
                            className="bg-violet-500 hover:bg-violet-600 transition-all ease-in duration-75 border-2 border-violet-500  text-white py-3 px-6 rounded-xl w-full font-semibold flex gap-2 items-center justify-center"
                            id="submit"
                        >
                            <span>Send</span>

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
                                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                                    />
                                </svg>
                            </span>
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default CreateTestimonialPage;
