import useFetch from '../useFetch';
import List from './List';

const Customers = () => {
     const { data: customers } = useFetch('http://localhost:8000/customers');

     return (
          <div className="home">
               <h1>Hello customers</h1>
               { customers && <List customers={customers} />}
          </div>
     );
}
     

export default Customers;
