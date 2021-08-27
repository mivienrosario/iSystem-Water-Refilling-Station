import EmployeeList from "./EmployeeList";
import { 
     Route,
     Link, 
     Switch, 
     useRouteMatch } from "react-router-dom";
import useFetch from "./useFetch";
import Create from "./Create";
import { useState } from "react";

const Employees = () => {
     const title = 'Employees';

     const { data: employees, isPending, error } = useFetch('http://localhost:8000/employees');
     const { url } = useRouteMatch();
     const [showList, setShowList] = useState(true);

     const onCreate = () => {
          setShowList(false);
     }


     return ( 
          <div className="home">
               <h1>{ title }</h1>
               <button onClick={onCreate}>Create New Employee</button>
               { employees && <EmployeeList employees={employees} /> }
               
          </div>    
          
      );
};

export default Employees;