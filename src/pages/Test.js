import React from "react";
import HaveFun from "../components/HaveFun";
import EchartsClass from "../components/EchartsClass";

function getValue(value) {
    alert(value)
}

function Test() {
    return (
        <div>
            <HaveFun name="test" getValue={getValue}/>
            <EchartsClass/>
        </div>
    )
}

export default Test
