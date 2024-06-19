import { useState } from "react";
import "./ToggleText.css";

export const HowToJoin = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleText = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <>
      <div className="server-option">
        <button className="toggle-button" onClick={() => toggleText("java")}>
          <img src="./mouse.svg" alt="" />Jugar en Java (Windows/Mac/Linux)
        </button>
        {visibleSection === "java" && (
          <div className="toggle-text">
            <p>
              Haga click en Multijugador, agregar un servidor, inserte esta IP:
            </p>
            <code>mc.zuros.xyz</code>
            <p>&nbsp;luego guarde y conéctese</p>
            <p>En caso de no funcionar puede probar la ip alternativa</p>
            <code>be.zuros.xyz:25568</code>
          </div>
        )}
      </div>

      <div className="server-option">
        <button className="toggle-button" onClick={() => toggleText("bedrock")}>
         <img src="mobile.svg" alt="" /> Jugar en Bedrock (Android/iOS/Windows)
        </button>
        {visibleSection === "bedrock" && (
          <div className="toggle-text">
            <p>
              Haga click en jugar, luego haga click en servidores y agregar un
              servidor, en nombre zuros y en ip inserte esta IP:
            </p>
            <code>be.zuros.xyz</code>
            <p>y en Puerto inserte</p>
            <code>8126</code>

            <p>luego guardar y conéctese</p>
          </div>
        )}
      </div>

      <div className="server-option">
        <button className="toggle-button" onClick={() => toggleText("console")}>
         <img src="./console.svg" alt="" /> Jugar en Bedrock (Switch/PS4/PS5/Xbox)
        </button>
        {visibleSection === "console" && (
          <div className="toggle-text">
            <p>Minecraft Bedrock Edition también se ejecuta en consolas, pero los fabricantes han restringido las capacidades multijugador de terceros por razones legales (muy cuestionables). Deberá evitar las restricciones</p>
            <p>Para ello necesitas un dispositivo móvil</p>
            <a href="https://zuros.xyz/join#android">Tutorial desde Android</a>
            <br />
            <br />
            <a href="https://zuros.xyz/join#ios">Tutorial desde iOS</a>
          </div>
        )}
      </div>
    </>
  );
};
