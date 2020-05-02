import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import EmployeeDirectory from "./containers/EmployeeDirectory";

function App() {
  return (
   <Router>
     <Route exact path ="/" component={EmployeeDirectory} />
     <Route exact path ="/directory" component={EmployeeDirectory} />
   </Router>
  );
}

export default App;
