import React, { useState, createContext } from "react";
import ExampleB from "./ExB";

export const UserContext = createContext();

function Example() {

    const [user, setUser] = useState("Vishwas");

    return (<div className="box">
        <h1>BOX A</h1>
        <h2>{`Hello ${user}`}</h2>
        <UserContext.Provider value={user}>
            <ExampleB user={user} />
        </UserContext.Provider>
    </div>);
}

export default Example