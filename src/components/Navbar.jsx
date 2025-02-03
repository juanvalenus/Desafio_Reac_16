// import "bootstrap/dist/css/bootstrap.min.css";

// const Navbar = () => {
//   const total = 25000;
//   const token = false; // Simulación del estado de autenticación

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">🍕 Home</a>
//         <div className="d-flex gap-2">
//           {token ? (
//             <>
//               <button className="btn btn-outline-primary">🔓 Profile</button>
//           
//             </>
//           ) : (
//             <>
//              
//             </>
//           )}
//           
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import "bootstrap/dist/css/bootstrap.min.css";
import { formatPrice } from "../utils/utils";

const Navbar = () => {
  const total = 25000;
  const token = false; // Simulación del estado de autenticación

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">🍕 Home</a>
        <div className="d-flex gap-2">
          {token ? (
            <>
              <button className="btn btn-outline-primary">🔓 Profile</button>
              <button className="btn btn-outline-danger">🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-success">🔐 Login</button>
              <button className="btn btn-outline-warning">🔐 Register</button>
            </>
          )}
          <button className="btn btn-outline-dark">
            🛒 Total: ${formatPrice(total)}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



  