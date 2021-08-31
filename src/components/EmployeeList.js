import pic from '../img/Employee/sample.png';

const EmployeeList = ({ employees }) => {
     return (
          <div className="emp-list">
               {employees.map((emp) => (
                    <div className="emp-preview" key={emp.id}>
                         
                         <div className="profile-container flex">
                              <div> {/* first container */}
                                   <img src={pic} alt="" />
                              </div>

                              <div className="flex flex-column"> {/* second container */}
                                   <div> {/* first inner container */}
                                        <h2>{emp.last}, {emp.first}</h2>
                                   </div>

                                   <div className="flex"> {/* second inner container */}
                                        <div>
                                             <ul>
                                                  <li>Gender</li>
                                                  <li>Date of Birth</li>
                                                  <li>Civil Status</li>
                                                  <li>SSS</li>
                                                  <li>TIN</li>
                                                  <li>PhilHealth</li>
                                             </ul>
                                        </div>
                                        <div>
                                             <ul>
                                                  <li>Male</li>
                                                  <li>June 5, 1980</li>
                                                  <li>Married</li>
                                                  <li>000-0000-000-0</li>
                                                  <li>000-0000-000-0</li>
                                                  <li>0000-000-000-0</li>
                                             </ul>
                                        </div>
                                   </div> {/* second inner container */}
                              </div> {/* second container */}

                         </div> {/* profile-container */}
                         
                    </div>
               ))}
          </div>

               
     );
}

export default EmployeeList;