import React, { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const AddNew = (testUserData) => {
    const userInfo = useUser();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        rating: true,
        testimonial: true,
        status: "Active",
    });

    const handleFormDataChange = (e) => {
        if (e.target.name === "title") {
            setFormData({
                ...formData,
                title: e.target.value,
            });
        } else if (e.target.name === "rating") {
            setFormData({
                ...formData,
                rating: e.target.value === "Yes" ? true : false,
            });
        } else if (e.target.name === "testimonial") {
            setFormData({
                ...formData,
                testimonial: e.target.value === "Yes" ? true : false,
            });
        } else {
            setFormData({
                ...formData,
                status: e.target.value === "Active" ? "Active" : "Disable",
            });
        }
    };

    const handleFormSubmission = (e) => {
        e.preventDefault();
        const postForm = async (id) => {
            const response = await axios.post(
                `http://localhost:5000/api/forms`,
                {
                    ...formData,
                    userId: testUserData ? testUserData.id : userInfo.user.id,
                }
            );

            //console.log(response.data);
            /* setIsLoading(false); */

            /* setApiData(response.data); */
        };

        postForm();
        setFormData({
            title: "",
            rating: true,
            testimonial: true,
            status: "Show",
        });
        navigate("/forms");
    };
    return (
        <div className="p-4 overflow-hidden bg-blue-50 shadow-cardShadow rounded-md w-full">
            <h4
                className="mb-8 text-xl font-bold text-center w-[600px]"
                /* onClick={() => console.log(formData)} */
            >
                Add New Form
            </h4>
            <form
                className="max-w-[600px]"
                onSubmit={(e) => handleFormSubmission(e)}
            >
                <div className="space-y-1 flex flex-col gap-1 mb-6">
                    <label htmlFor="title" className="font-semibold">
                        Service Title
                    </label>
                    <input
                        required
                        className="bg-white border-2 border-indigo-900 py-2 px-4 rounded-md"
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleFormDataChange}
                    />
                </div>

                <div className="space-y-1 flex flex-col gap-1 mb-6">
                    <label htmlFor="rating">Rating</label>
                    <select
                        name="rating"
                        id=""
                        className="bg-white border-2 border-indigo-900 py-2 px-4 rounded-md"
                        value={formData.rating ? "Yes" : "No"}
                        onChange={handleFormDataChange}
                    >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>

                <div className="space-y-1 flex flex-col gap-1 mb-6">
                    <label htmlFor="testimonial">Testimonial</label>
                    <select
                        name="testimonial"
                        id=""
                        className="bg-white border-2 border-indigo-900 py-2 px-4 rounded-md"
                        value={formData.testimonial ? "Yes" : "No"}
                        onChange={handleFormDataChange}
                    >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>

                <div className="space-y-1 flex flex-col gap-1">
                    <label htmlFor="status">Status</label>
                    <select
                        name="status"
                        id=""
                        className="bg-white border-2 border-indigo-900 py-2 px-4 rounded-md"
                        value={formData.status}
                        onChange={handleFormDataChange}
                    >
                        <option value="Active">Active</option>
                        <option value="Disable">Disable</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="bg-indigo-900 text-white py-3 px-6 rounded-xl mt-7 w-full"
                    id="submit"
                >
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddNew;
