import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import FeedbackImg from "./assets/Feedback.svg";
import "./App.css";
import { useUser } from "@clerk/clerk-react";

function App() {
    const user = useUser();

    return (
        <div className="max-w-7xl mx-auto bg-blue-50 overflow-y-hidden h-full">
            <div className="flex gap-5 items-center justify-center py-20">
                <h1 className="text-3xl font-bold max-w-[320px] mx-auto text-left pt-20 text-indigo-950">
                    Let your customers speak for you - effortlessly collect
                    powerful testimonials with our tool.
                </h1>
                <img
                    src={FeedbackImg}
                    alt=""
                    className="max-w-[500px] mx-auto p-10"
                />
            </div>
            {/* {!user.isSignedIn && (
                <div className="flex gap-5 items-center justify-center py-20">
                    <h1 className="text-3xl font-bold max-w-[320px] mx-auto text-left pt-20 text-indigo-950">
                        Let your customers speak for you - effortlessly collect
                        powerful testimonials with our tool.
                    </h1>
                    <img
                        src={FeedbackImg}
                        alt=""
                        className="max-w-[500px] mx-auto p-10"
                    />
                </div>
            )} */}
        </div>
    );
}

export default App;
