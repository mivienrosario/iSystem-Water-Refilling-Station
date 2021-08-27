import { Link } from "react-router-dom";

const Navbar = () => {
     return (
          <nav className="navbar">
               <h1>iSystem</h1>
               <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/customers">Customers</Link>
                    <Link to="/employees">Employees</Link>
               </div>
          </nav>
     );
}

export default Navbar;   