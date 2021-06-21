import React from "react";
import HaveFun from "../components/HaveFun";
import MyChart from "../components/MyChart";

function getValue(value) {
    alert(value)
}

function Test() {
    return (
        <div>
            <HaveFun name="test" getValue={getValue}/>
            <MyChart/>
        </div>
    )

}

export default Test
