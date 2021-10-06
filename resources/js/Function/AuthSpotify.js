export const AuthSpotify = () => {
    const params = {
        response_type: "code",
        client_id: "098c333c3bff4931ae86ae6db551d00b",
        redirect_uri: "http://localhost:8000",
        mode: "cors",
        credentials: "include"
    };

    const query_params = new URLSearchParams(params);
    fetch("https://accounts.spotify.com/authorize" + query_params)
        .then(res => console.log(res))
        .catch(err => console.log(err));
};

export const test = () => {
    alert("test");
};
