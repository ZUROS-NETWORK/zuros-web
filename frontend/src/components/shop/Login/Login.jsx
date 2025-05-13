import "./Login.css";
import { useCheckout } from "../../../context/CheckoutContext";
import { useState } from "react";


export const LoginForm = () => {
    const { username, setUsername, mcVersion, setMcVersion, proceedToCheckout } = useCheckout();
    const [error, setError] = useState("");

        if (mcVersion === "bedrock") {
            if (username && !username.startsWith('_')) {
                setUsername('_' + username);
            }
        }

    const handleCheckout = () => {
        if (!username.trim() || username.trim() === "_") {
            setError("Por favor, ingresa un nombre de usuario.");
            return;
        }
        setError("");
        proceedToCheckout();
    };

    return (
        <div className="login-container">
            <h2>Proceso de Compra</h2>
            <p>Por favor, ingresa tu nombre de usuario y selecciona tu versión de Minecraft.</p>
            
            <label>
                Nombre de usuario:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Ejemplo: Karen123"
                />
                {error && <span className="login-error-message">{error}</span>}
            </label>
            
            <label>
                Versión de Minecraft:
                <select
                    value={mcVersion}
                    onChange={(e) => setMcVersion(e.target.value)}
                >
                    <option value="java">Java</option>
                    <option value="bedrock">Bedrock</option>
                </select>
            </label>
            
            <button onClick={handleCheckout}>Finalizar compra</button>
        </div>
    );
};