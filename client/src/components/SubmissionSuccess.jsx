import React from "react";

const SubmissionSuccess = () => {
    return (
        <div className="bg-blue-950 text-white min-h-[100vh] max-w-7xl mx-auto flex items-center justify-center">
            <div className="bg-green-300 text-indigo-900 py-4 px-8 rounded-xl flex gap-3">
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
                            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                        />
                    </svg>
                </span>
                <span>Submission Successful</span>
            </div>
        </div>
    );
};

export default SubmissionSuccess;
