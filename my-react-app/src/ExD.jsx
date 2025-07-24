import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "./Ex";

function ExampleD() {

    const user = useContext(UserContext);

    return (<div className="box">
        <h1>BOX D</h1>
        <h2>{`Bye ${user}`}</h2>
    </div>);
}

export default ExampleD