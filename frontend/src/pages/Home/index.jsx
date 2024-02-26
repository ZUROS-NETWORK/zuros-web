import "./styles.css";
export const Home = () => {
  return (
    <>
      <h2>BIENVENID@ A ZUROS NETWORK</h2>
      <section>
        <p>
          zuros network es uno de los mejores y más exclusivos servidores de
          Minecraft survival y de minijuegos. Aquí puedes disfrutar de una
          experiencia de Minecraft sin toxicidad un lugar pacifico para todos.
          100% LGBTQ+ Friendly. Para todas las plataformas Java / Bedrock, fiel
          al juego, agregando muchas mejoras en la calidad de vida. Relajarte y
          disfrutar de tu caminata.
        </p>
      </section>
      <section>
        <p>
          Zuros Network es un servidor de Minecraft java pero también es un
          servidor de Minecraft Bedrock. ¡Esto significa que puede conectarse
          usando su PC, Mac, teléfono o incluso una consola!
        </p>
        <a href="join">QUE ESPERAS UNETE YA!!!</a>
      </section>

      <section className="vision-section">
        <h2>Nuestra vision</h2>

        <div className="vision-cards">
          <div className="vision-column">
            <h2>Inclusivo</h2>
            <p>
              Zuros es un servidor de Minecraft para todos. 100% LGBTQ+
              friendly. Todas las plataformas soportadas. Ven y juega en zuros,
              ya sea que tengas un teléfono o una PC Gamer.
            </p>
          </div>

          <div className="vision-column">
            <h2>Juego limpio</h2>
            <p>
              Aceptamos donaciones. Nos encantan las donaciones. Pero no
              vendemos artículos ni ventajas con precios excesivos o
              sobrecargados. Recompensamos cada donación con artículos
              balanceados.
            </p>
          </div>

          <div className="vision-column">
            <h2>Fácil y Sencillo</h2>
            <p>
              Hicimos que zuros fuera un servidor fácil de usar y comprender. No
              es necesario navegar a través de complejos tutoriales, simplemente
              únase use /tpr y sera teletrasportado de forma aleatorio que lo
              sacará de la región del spawn.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
