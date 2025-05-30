import React from "react";
import UserForm from "./components/userForm";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <div>
          <UserForm />
        </div>
      </Provider>
    </div>
  );
};

export default App;
