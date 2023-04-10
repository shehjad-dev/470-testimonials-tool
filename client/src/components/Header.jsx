import {
    SignedIn,
    SignedOut,
    UserButton,
    useClerk,
    useUser,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";

/* import "../styles/Header.css"; */

function SignUpButton() {
    const clerk = useClerk();

    return (
        <button
            className="sign-up-btn bg-white text-indigo-900 outline-2 py-2 px-4 rounded-xl font-medium"
            onClick={() => clerk.openSignUp({})}
        >
            Sign up
        </button>
    );
}

function SignInButton() {
    const clerk = useClerk();

    return (
        <button
            className="sign-in-btn bg-indigo-900 text-white py-2 px-4 rounded-xl font-medium"
            onClick={() => clerk.openSignIn({})}
        >
            Sign in
        </button>
    );
}

function Header() {
    const user = useUser();
    /* console.log(user); */
    return (
        <header className="max-w-7xl bg-blue-100 mx-auto px-5 sticky top-0 shadow-sm z-50">
            <nav className="flex justify-between items-center py-3">
                <div>
                    <h2 className="font-extrabold text-3xl text-blue-950">
                        Revows
                    </h2>
                </div>
                <SignedOut>
                    <ul className="flex gap-3">
                        <li>
                            <SignInButton />
                        </li>
                        <li>
                            <SignUpButton />
                        </li>
                    </ul>
                </SignedOut>
                {/* <SignedIn>
                    <div>This content is visible only to signed in users.</div>
                </SignedIn> */}
                <SignedIn>
                    <div className="w-9 h-9 rounded-full border-2 border-indigo-900 flex items-center justify-center">
                        <UserButton />
                    </div>
                </SignedIn>
            </nav>
        </header>
    );
}

export default Header;
