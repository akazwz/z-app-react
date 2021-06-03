import React, {Suspense} from "react";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function Loading() {
    return (
        <div>
            <h1>Loading...</h1>
        </div>
    )
}

export default function App() {
    return (
        <Suspense fallback={<Loading/>}>
            <SignUp/>
        </Suspense>
    )
}
