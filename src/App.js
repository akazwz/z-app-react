import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useRouteMatch,
    useParams
} from "react-router-dom";
import FileInput from "./components/FileInput";

export default function App() {
    return (
        <FileInput/>
    )
}

function Home() {
    return <h2>Home</h2>
}

function About() {
    return <h2>About</h2>
}

function Topics() {
    let match = useRouteMatch();

    return (
        <div>
            <h2>Topics</h2>

            <ul>
                <li>
                    <NavLink to={`${match.url}/components`}>Components</NavLink>
                </li>
                <li>
                    <NavLink to={`${match.url}/props-v-state`}>
                        Props v. State
                    </NavLink>
                </li>
            </ul>

            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic/>
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    )
}

function Topic() {
    let {topicId} = useParams();
    return <h3>Request topic ID: {topicId}</h3>;
}
