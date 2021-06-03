import React, {Suspense} from "react";
import Login from "./pages/Login";

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
            <Login/>
        </Suspense>
    )
}
