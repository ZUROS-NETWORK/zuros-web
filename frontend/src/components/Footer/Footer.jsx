import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-group">
        <p className="footer-title">&copy; ZUROS NETWORK</p>
        <p>Al servicio del jugador desde marzo de 2020.</p>
        <p>
          ¡Únete a nuestro Discord!{" "}
          <a href="https://discord.zuros.xyz/">discord.zuros.xyz</a>
        </p>
      </div>

      <div className="footer-group">
        <p className="footer-title">Links útiles</p>
        <ul>
          <li><a href="https://discord.zuros.xyz">Discord</a></li>
          <li><a href="https://zuros.tebex.io/category/donar">Tienda</a></li>
          <li><a href="/legal-terms">Términos de servicio</a></li>
        </ul>
      </div>

      <div className="footer-group">
        <p className="footer-title">Votar</p>
        <ul>
          <li>
            <a href="https://topminecraftservers.org/server/23559" target="_blank" rel="noopener noreferrer">
              Top Minecraft Servers
            </a>
          </li>
        </ul>
      </div>
      
      <div className="footer-note">
        <hr className="footer-separator" />
        Zuros Network no está afiliado con Mojang Studios.
      </div>
    </footer>
  );
};
