const EmployeeList = ({ employees, first, last }) => {
     return (
          <div className="emp-list">
               <h1>Employees</h1>
               {employees.map((emp) => (
                    <div className="emp-preview" key={emp.id}>
                         <img></img>
                         <h2>{emp.last}, {emp.first}</h2>
                         <p>Some info</p>
                    </div>
               ))}
          </div>

               
     );
}

export default EmployeeList;