import { Provider } from "react-redux";
import store from "./reducers/store";
import MyRoutes from "./MyRoutes";

function MyApp() {
    return (
        <Provider store={store}>
            <MyRoutes />
        </Provider>
    );
}

export default MyApp;
