import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <p>&copy; ZUROS NETWORK</p>
        Al servicio del jugador desde marzo de 2020.
        <p>
          ¡Únete a nuestro Discord!{" "}
          <a href="https://discord.zuros.xyz/">discord.zuros.xyz</a>
        </p>
      </div>

      <div className="footer">
        <p>Links utiles: </p>
        <ul>
          <li>
            <a href="https://discord.zuros.xyz">Discord</a>
          </li>
          <li>
            <a href="https://zuros.tebex.io/category/donar">Tienda</a>
          </li>
          <li>
            <a href="/legal-terms">Terminos de servicio</a>
          </li>
        </ul>
      </div>
      <div className="footer">
        <p>Votar: </p>
        <ul>
          <li>
            <a href="https://topminecraftservers.org/server/23559">
              top minecraft servers
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
