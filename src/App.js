import React, {Suspense} from "react";
import {NavLink, Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import BottomBar from "./components/BottomBar";

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
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/sign-in" component={SignIn}/>
                <Route exact path="/sign-up" component={SignUp}/>
            </Switch>
            <BottomBar/>
        </Suspense>
    )
}
