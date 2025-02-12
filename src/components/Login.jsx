import { useState } from "react";

function Login () {

    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();
        if (!email || !password){

            setMessage("Todos los campos son obligatorios.");
            return
        }

        if (password.length < 6) {

            setMessage("La contraseña debe ser al menos 6 caracteres.");
            return;


        }

        setMessage("Inicio de sesion exitoso.");

    };



return (

    <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
         <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/><br />
                <button type="submit">Iniciar Sesión</button>
        </form>
        {message && <p>{message}</p>}

    </div>
);

};

export default Login