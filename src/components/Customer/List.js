const List = ({ customers, name, city }) => {
     return (
          <div>
               { customers.map((cust) => (
                    <div key={cust.id}>
                         <h2>{cust.name}</h2>
                         <p>Location: {cust.city}</p>
                    </div>
               ))}
          </div>
     );
};

export default List;
