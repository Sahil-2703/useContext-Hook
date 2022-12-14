import React from "react";
import ParentComponent from "./Pages/useContext";
import Courses from "./Pages/useReducer";

const renderReducerHook = () => {
  return <Courses />;
};

const renderContextHook = () => {
  return <ParentComponent />;
};

const App = () => {
  return (
    <div className="box">
      {renderReducerHook()}
      {renderContextHook()}
    </div>
  );
};

export default App;