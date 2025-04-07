import { useState } from "react";
import {
    Monitor,
    Smartphone,
    Gamepad
} from "lucide-react";

import "./styles.css";

export function PlatformCards() {
    const [visibleSection, setVisibleSection] = useState(null);

    const toggleText = (section) => {
        setVisibleSection(visibleSection === section ? null : section);
    };

    const ExtraContent = ({ section }) => {
        if (section === "java") {
            return (
                <div className="platforms-card-extra">
                    <p>Haga click en Multijugador, agregar un servidor, inserte esta IP:</p>
                    <code>mc.zuros.xyz</code>
                    <p>&nbsp;luego guarde y conéctese</p>
                    <p>En caso de no funcionar puede probar la IP alternativa</p>
                    <code>be.zuros.xyz:25568</code>
                </div>
            );
        } else if (section === "bedrock") {
            return (
                <div className="platforms-card-extra">
                    <p>Haga click en jugar, luego haga click en servidores y agregar un servidor, en nombre Zuros y en IP inserte:</p>
                    <code>be.zuros.xyz</code>
                    <p>y en Puerto inserte</p>
                    <code>8126</code>
                    <p>luego guardar y conéctese</p>
                </div>
            );
        } else if (section === "console") {
            return (
                <div className="platforms-card-extra">
                    <p>Minecraft Bedrock Edition también se ejecuta en consolas, pero los fabricantes han restringido las capacidades multijugador de terceros por razones legales (muy cuestionables).</p>
                    <p>Para ello necesitas un dispositivo móvil</p>
                    <a href="https://zuros.xyz/join#android">Tutorial desde Android</a><br />
                    <a href="https://zuros.xyz/join#ios">Tutorial desde iOS</a>
                </div>
            );
        }
        return null;
    };

    return (
        <>
            <div className="platforms-text-center platforms-mb-16">
                <h2 className="platforms-section-title">Juega en cualquier plataforma</h2>
                <p className="platforms-description">Conéctate a nuestro servidor desde cualquier dispositivo. ¡Todos son bienvenidos!</p>
            </div>

            <div className="platforms-card-grid">
                {["java", "bedrock", "console"].map((platform) => {
                    const titles = {
                        java: "Jugar en Java",
                        bedrock: "Jugar en Bedrock",
                        console: "Jugar en Consola"
                    };
                    const descriptions = {
                        java: "Conéctate desde tu PC con Windows, Mac o Linux usando la versión Java de Minecraft.",
                        bedrock: "Conéctate desde tu dispositivo móvil o PC con Windows 10/11 usando Minecraft Bedrock.",
                        console: "Conéctate desde tu consola de videojuegos usando la versión Bedrock de Minecraft."
                    };
                    const btnLabels = {
                        java: "Windows/Mac/Linux",
                        bedrock: "Android/iOS/Windows",
                        console: "Switch/PS4/PS5/Xbox"
                    };
                    const colors = {
                        java: "blue",
                        bedrock: "pink",
                        console: "purple"
                    };
                    const Icons = {
                        java: Monitor,
                        bedrock: Smartphone,
                        console: Gamepad
                    };
                    const IconComponent = Icons[platform];

                    return (
                        <div className="platforms-card" key={platform}>
                            <div className={`platforms-card-header platforms-header-${colors[platform]}`}></div>
                            <div className="platforms-card-content">
                                <div className={`platforms-icon-wrapper platforms-icon-${colors[platform]}`}>
                                    <IconComponent size={40} />
                                </div>
                                <h3 className="platforms-card-title">{titles[platform]}</h3>
                                <p className="platforms-card-text">{descriptions[platform]}</p>
                                <button
                                    className={`platforms-card-button platforms-btn-${colors[platform]}`}
                                    onClick={() => toggleText(platform)}
                                >
                                    {btnLabels[platform]}
                                </button>

                                <div className="platforms-mobile-only">
                                    {visibleSection === platform && <ExtraContent section={platform} />}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="platforms-desktop-only">
                {visibleSection && <ExtraContent section={visibleSection} />}
            </div>
        </>
    );
}
