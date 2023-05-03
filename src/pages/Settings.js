import { useLoaderData } from "react-router-dom";

function Settings() {

    const data = useLoaderData();
    console.log('****', data);
    return (
        <div>I AM Settings</div>
    );
}

export default Settings;
