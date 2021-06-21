import React, {Suspense} from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Digest from "./pages/Digest";
import BottomBar from "./components/BottomBar";
import Test from "./pages/Test";

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
                <Route exact path="/digest" component={Digest}/>
                <Route exact path="/sign-in" component={SignIn}/>
                <Route exact path="/sign-up" component={SignUp}/>
                <Route exact path="/test" component={Test}/>
            </Switch>
            <BottomBar/>
        </Suspense>
    )
}
