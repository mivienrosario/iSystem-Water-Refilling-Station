import EmployeeList from "./EmployeeList";
import useFetch from "./useFetch";

const Employees = () => {
     const title = 'Employees';
     const { data: employees } = useFetch('http://localhost:8000/employees');
     return ( 
          <div className="home">
               <h1>{ title }</h1>
               { employees && <EmployeeList employees={employees} /> }
               
          </div>    
          
      );
};

export default Employees;