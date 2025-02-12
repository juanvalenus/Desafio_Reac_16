import { useState } from "react";

function Register () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!email ||!password ||!confirmPassword    ) {

            setMessage ("Todlos los campos son obligatorios.");
            return;
        }
        if (password.length < 6){
            setMessage("La Contraseña debe tener al menos 6 caracters.")
            return;
        }

        if(password !== confirmPassword){

            setMessage("Las contraseñas no coinciden");
            return;
        }
        setMessage("Registro Exitoso.")


    }

    return (

        <div>
            <h2>Registro </h2>

            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/><br />
                <input type="password" placeholder="Confirmar Contraseña" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/><br />
                <button type="submit">Registrarse</button>


            </form>

            {message && <p>{message} </p>}


        </div>

        
    );


}

export default Register