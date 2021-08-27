import { useState, useEffect } from "react";
import EmployeeList from "./EmployeeList";


const Home = () => {

     const [employees, setEmployees] = useState(null);

     useEffect(() => {
          fetch('http://localhost:8000/employees')
               .then(res => {
                    return res.json();
               })
               .then(data => {
                    console.log(data);
                    setEmployees(data);
               });
     }, []);

     return ( 
          <div className="home">
               {employees && <EmployeeList employees={employees} />}
               
          </div>
      );
}
 
export default Home;