import { useContext } from "react";
import { MyAppContext } from "./App";



function  HeaderDetails(props) {
    const {
        title,
        subtitle
    } = props;

    const val = useContext(MyAppContext);

    return (
        <>
            <div>Title: {title}</div>
            <div>Subtitle: {subtitle}</div>
            <div>User: {val}</div>
        </>
    );
}

export default HeaderDetails;
