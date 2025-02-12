// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Home />
//       <Footer />
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Footer from "./components/Footer";
// import Register from "./components/Register";
// import Login from "./components/Login";

// function App() {
//   const [view, setView] = useState("home"); // "home", "register" o "login"

//   return (
//     <div>
//       <Navbar />
//       <nav>
//         <button onClick={() => setView("home")}>Inicio</button>
//         <button onClick={() => setView("register")}>Registro</button>
//         <button onClick={() => setView("login")}>Login</button>
//       </nav>
      
//       {view === "home" && <Home />}
//       {view === "register" && <Register />}
//       {view === "login" && <Login />}

//       <Footer />
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./pages/Home";

function App() {
  const [view, setView] = useState("home"); // Estado para cambiar entre Home, Register y Login

  return (
    <div>
      <Navbar />

      {/* Botones de navegación */}
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", margin: "20px 0" }}>
        <button onClick={() => setView("home")}>Inicio</button>
        <button onClick={() => setView("register")}>Registro</button>
        <button onClick={() => setView("login")}>Login</button>
      </div>

      {/* Renderizado condicional de las páginas */}
      {view === "home" && <Home />}
      {view === "register" && <Register />}
      {view === "login" && <Login />}

      <Footer />
    </div>
  );
}

export default App;
