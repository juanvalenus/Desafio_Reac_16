// import Header from "../components/Header";
// import CardPizza from "../components/CardPizza";

// function Home() {
//   return (
//     <div className="container mt-4">
//       <Header />
//       <div className="d-flex gap-3 flex-wrap justify-content-center">
//         <CardPizza
//           name="Napolitana"
//           price={5950}
//           ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
//           img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
//         />
//         <CardPizza
//           name="Española"
//           price={6950}
//           ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
//           img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
//         />
//         <CardPizza
//           name="Pepperoni"
//           price={6950}
//           ingredients={["mozzarella", "pepperoni", "orégano"]}
//           img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
//         />
//       </div>
//     </div>
//   );
// }

// export default Home;
// 

import { pizzas, pizzaCart } from "./pizzas";
import CardPizza from "../components/CardPizza";
import Cart from "../components/Cart"; // Asegúrate de que este archivo existe

const Home = () => {
  return (
    <div className="home-container">
      <div className="pizzas-list">
        {pizzas.map((pizza) => (
          <CardPizza key={pizza.id} pizza={pizza} />
        ))}
      </div>

      {/* Agregar el carrito debajo de la lista de pizzas */}
      <Cart cartItems={pizzaCart} />
    </div>
  );
};

export default Home;
