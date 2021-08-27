

const EmployeeList = ({ employees, first, last }) => {
     return (
          <div className="emp-list">
               
               
               {employees.map((emp) => (
                    <div className="emp-preview" key={emp.id}>
                         <h2>{emp.last}, {emp.first}</h2>
                         <p>Some info about {emp.first}</p>
                    </div>
               ))}
          </div>

               
     );
}

export default EmployeeList;