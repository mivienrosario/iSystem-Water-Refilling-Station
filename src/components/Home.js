import { useState } from "react";


const Home = () => {

     const [employees, setEmployees] = useState([
          { first: 'Butch', last: 'Mabunga', id: 1 },
          { first: 'Jejomar', last: 'De Leon', id: 2 },
          { first: 'Ruel', last: 'M', id: 3},
          { first: 'Jonathan', last: 'Jularbal', id: 4 }
     ]);

     return ( 
          <div className="home">
               <table className="table">
                    <tr>
                         <th>First Name</th>
                         <th>Last Name</th>
                    </tr>
                    {employees.map((emp) => (
                         <tr className="emp-preview" key={emp.id}>
                              <td>{emp.first}</td>
                              <td>{emp.last}</td>
                         </tr>
                    ))}
               </table>
               
          </div>
      );
}
 
export default Home;