import { Provider } from "react-redux";
import ReduxCounter from "./ReduxCounter";
import { store } from "./Store";

const ReduxApp = () => {
  return (
    <>
      <h1>Redux Toolkit</h1>
      <Provider store={store}>
        <ReduxCounter />
      </Provider>
    </>
  );
};

export default ReduxApp;
