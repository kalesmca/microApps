import React from "react";
import EmployeeList from "./components/employeeList";

import { Provider } from "react-redux";
import { store } from "empForm/store";
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <div>
          <EmployeeList />
        </div>
      </Provider>
    </div>
  );
};

export default App;
