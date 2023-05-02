import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { ClerkProvider } from "@clerk/clerk-react";
import { PrivateRoutes } from "./utils/PrivateRoutes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddNew from "./components/AddNew";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import { SignInButton } from "./components/Header";

const publishableKey = import.meta.env
    .VITE_SOME_REACT_APP_CLERK_PUBLISHABLE_KEY;

it("the landing should be rendered correctly", () => {
    render(
        <ClerkProvider publishableKey={publishableKey}>
            <App />
        </ClerkProvider>
    );
    const welcomeMsg = screen.queryByText(
        /Let your customers speak for you - effortlessly collect powerful testimonials with our tool./i
    );
    expect(welcomeMsg).toBeVisible();
});

it("the signin button click should open up the auth popup", () => {
    render(
        <ClerkProvider publishableKey={publishableKey}>
            <SignInButton />
        </ClerkProvider>
    );
    const btn = screen.getByRole("button");
    fireEvent.click(btn);

    setTimeout(() => {
        const signInPopupMsg = screen.queryByText(/to continue to Revows/i);
        expect(signInPopupMsg).toBeVisible();
    }, 5000);
});
