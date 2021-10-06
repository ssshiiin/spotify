import React from "react";
import axios from "axios";

const Auth = () => {
    const AuthSpotify = () => {
        axios
            .get(
                "https://accounts.spotify.com/authorize?response_type=code&client_id=098c333c3bff4931ae86ae6db551d00b&redirect_uri=http://localhost:8000",
                {
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8",
                        "Access-Control-Allow-Origin": "*",
                        "X-Requested-With": "XMLHttpRequest"
                    }
                }
            )
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    return <button onClick={AuthSpotify}>login</button>;
};

export default Auth;
