import { Provider } from "react-redux";
import App from "./App";
import store from "./reducers/store";

function MyApp(params) {

    
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

export default MyApp;
