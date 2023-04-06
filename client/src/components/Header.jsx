import {
    SignedIn,
    SignedOut,
    UserButton,
    useClerk,
    useUser,
} from "@clerk/clerk-react";
/* import "../styles/Header.css"; */

/* function SignUpButton() {
    const clerk = useClerk();

    return (
        <button className="sign-up-btn" onClick={() => clerk.openSignUp({})}>
            Sign up
        </button>
    );
} */

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
    return (
        <header className="max-w-7xl bg-blue-100 mx-auto px-5">
            <nav className="flex justify-between items-center py-3">
                <div>
                    <h2 className="font-extrabold text-3xl text-blue-950">
                        Revows
                    </h2>
                </div>
                <SignedOut>
                    <ul>
                        <li>
                            <SignInButton />
                        </li>
                    </ul>
                </SignedOut>
                {/* <SignedIn>
                    <div>This content is visible only to signed in users.</div>
                </SignedIn> */}
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </nav>
        </header>
    );
}

export default Header;
