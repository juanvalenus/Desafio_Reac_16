// function CardPizza() {
//     return (
//       <div className="card">
//         <h2>Pizza Margarita</h2>
//         <p>Deliciosa pizza con tomate, mozzarella y albahaca.</p>
//       </div>
//     );
//   }
  
//   export default CardPizza;
  

// import { formatPrice } from "../utils/utils";

// const CardPizza = ({ name, price, ingredients, img }) => {
//   return (
//     <div className="card p-3 shadow-sm" style={{ width: "18rem" }}>
//       <img src={img} className="card-img-top" alt={name} />
//       <div className="card-body">
//         <h5 className="card-title">{name}</h5>
//         <p className="card-text">Ingredientes: {ingredients.join(", ")}</p>
//         <h6 className="text-success">Precio: ${formatPrice(price)}</h6>
//       </div>
//     </div>
//   );
// };

// export default CardPizza;

const CardPizza = ({pizza}) => {

return (

  <div className = "card">

    <img src={pizza.img} alt={pizza.name} />
    <h3>{pizza.name}</h3>
    <p>{pizza.desc}</p>
    <ul className="ingredients-list">
      {pizza.ingredients.map((ing, index) => (<li key={index}> {ing}</li>))}


    </ul>

    <p className="price"> Precio: ${pizza.price}</p>
    <button onClick={() => alert(`Añadido: ${pizza.name}`)}>Añadir al Carrito</button>

    


  </div>



);

};

export default CardPizza;
