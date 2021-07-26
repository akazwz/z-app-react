import React from "react";
import HaveFun from "../components/HaveFun";

function getValue(value) {
    alert(value)
}

function Test() {
    return (
        <div>
            <HaveFun name="test" getValue={getValue}/>
        </div>
    )
}

export default Test
