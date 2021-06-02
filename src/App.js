import React, {Suspense} from "react";
import SignIn from "./views/Login";

export default function App() {
    return (
        <Suspense fallback="loading">
            <SignIn/>
        </Suspense>
    )
}
