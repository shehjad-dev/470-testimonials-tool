import React from "react";
import { Link } from "react-router-dom";

function NoMatch() {
    return (
        <div className="bg-black text-white max-w-7xl mx-auto py-10 h-[100vh] px-10">
            <h2 className="text-red-500 bg-red-100 p-5 rounded-xl">
                Page not found - 404
            </h2>
            <p className="bg-white text-indigo-900 p-4 rounded-full w-fit my-20">
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}

export default NoMatch;
