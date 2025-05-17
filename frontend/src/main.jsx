import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App.jsx'
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
const webhookURL = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

const handleUnhandledRejection = (event) => {
    const payload = {
        content: `🚨 **Unhandled Promise Rejection** 🚨\n\n**Razón:** ${event.reason?.message || "Desconocida"}\n**Stack:**\n\`\`\`${event.reason?.stack || "No stack trace"}\`\`\``,
    };

    fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    }).catch(console.error);
};

window.onerror = function (message, source, lineno, colno, error) {
    const payload = {
        content: `🚨 **Error Reportado en el Cliente** 🚨\n\n**Mensaje:** ${message}\n**Error:** ${error?.message || "Desconocido"}\n**Stack:**\n\`\`\`${error?.stack || "No stack trace"}\`\`\`\n**URL:** ${source}:${lineno}:${colno}`,
    };

    fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    }).catch(console.error);
};

window.addEventListener("unhandledrejection", handleUnhandledRejection);


ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </HelmetProvider>
    </React.StrictMode>,
)
