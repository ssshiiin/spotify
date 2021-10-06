import React from "react";
import ReactDOM from "react-dom";
import Auth from "./Auth";

function Index() {
    return (
        <div>
            <Auth />
        </div>
    );
}

export default Index;

if (document.getElementById("app")) {
    ReactDOM.render(<Index />, document.getElementById("app"));
}
