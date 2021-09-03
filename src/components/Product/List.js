
const List = ({ products }) => {
     return (
          <div className="flex flex-row">
               {products.map((prod) => (
                   <div className="product" key={prod.id}>
                        {/* <img src="pic" className="img-100" /> */}
                        <h2>{prod.name}</h2>
                        <p>{prod.description}</p>
                   </div> 
               ))}
          </div>
     );
};

export default List;