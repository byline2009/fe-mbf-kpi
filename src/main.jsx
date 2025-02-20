import { createRoot } from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.scss";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import * as _redux from "./setup";
import store, { persistor } from "./setup/redux/Store";
import { AppRoutes } from "./routing/AppRoutes";
import API from "./utils/Api";
_redux.setupAxios(API, store);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
      <AppRoutes />
    </PersistGate>
  </Provider>
);
