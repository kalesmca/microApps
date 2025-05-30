import React from "react";
const EmployeeList = React.lazy(() => import("empList/App"));
const EMPForm = React.lazy(() => import("empForm/App"));

const App = () => {
  return (
    <div>
      Employee App
      <React.Suspense fallback="Loading...">
        <div style={{float:"left", width:"40%", marginTop:"30px"}}>
          <EMPForm />
        </div>
        <div >
          <EmployeeList />
        </div>
      </React.Suspense>
    </div>
  );
};

export default App;
