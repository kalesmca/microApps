import React from "react";
const EmployeeList = React.lazy(() => import("empList/App"));
const EMPForm = React.lazy(() => import("empForm/App"));
import { Provider } from "react-redux";

import { store } from "empForm/store";
import TestComponent from "./components/test";

const App = () => {
  return (
    <div>
      Employee App
      <Provider store={store}>
        <React.Suspense fallback="Loading...">
          <div style={{ float: "left", width: "40%", marginTop: "30px" }}>
            <EMPForm />
          </div>
          <div>
            {/* <TestComponent /> */}
            <EmployeeList />
          </div>
        </React.Suspense>
      </Provider>
    </div>
  );
};

export default App;
