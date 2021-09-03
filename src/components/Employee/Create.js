import Button from "../Button";

const Create = () => {

     const handleCreate = () => {
          console.log("create create create");
     }

     return (
          <div className="create">
               <h2>Add a new Employee</h2>
                    <form action="" className="flex flex-row mg-tb-8 ">
                         <div className="flex flex-column">
                              <label htmlFor="">First Name</label>
                              <label htmlFor="">Middle Name</label>
                              <label htmlFor="">Last Name</label>
                              <label htmlFor="">Birthdate</label>
                              <label htmlFor="">Gender</label>
                         </div>
                         <div className="flex flex-column no-border">
                              <input type="text" name="first-name" />
                              <input type="text" name="mid-name" />
                              <input type="text" name="last-name" />
                              <input type="date" name="bdate" />
                              <select name="gender" id="">
                                   <option value="Female">Female</option>
                                   <option value="Male">Male</option>
                              </select>
                              <Button children="save" handleClick={handleCreate} style="color: #9CCC2D" />
                         </div>
                    </form>
          </div>
     );
};

export default Create;