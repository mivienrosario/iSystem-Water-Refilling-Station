import EmployeeList from "./EmployeeList";
import useFetch from "../useFetch";
import Button from "../Button";
import { Link } from "react-router-dom";

const Employees = () => {
     const title = 'Employees';
     const { data: employees } = useFetch('http://localhost:8000/employees');
     return ( 
          <div className="home">
               <h1>{ title }</h1>
               <Link to="/create" >
                    <Button className="btn" children="add" />
               </Link>
               
               { employees && <EmployeeList employees={employees} /> }
               
          </div>    
          
      );
};

export default Employees;