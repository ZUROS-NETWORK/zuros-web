import { HowToJoin } from "../../components/HowToJoin/ToggleText";
import "./styles.css";
export const Home = () => {
  return (
    <>
    
      <section className="presentation-section">
        <div>
          <p className="presentation-text-large">
            ¿Quieres empezar una gran aventura?
          </p>
          <p>
            No importa cómo juegues ni cuál sea tu objetivo. Zuros network
            siempre puede contarte una historia diferente
          </p>
        </div>
        <a href="#join"><button className="pink-button">Jugar ahora</button></a>
      </section>
      <section>
        <p>
          Zuros network es uno de los mejores y más exclusivos servidores de
          Minecraft survival y de minijuegos. Aquí puedes disfrutar de una
          experiencia de Minecraft sin toxicidad un lugar pacifico para todos.
          100% LGBTQ+ Friendly. fiel al juego, agregando muchas mejoras en la
          calidad de vida. Relajarte y disfrutar de tu caminata.
        </p>
      </section>
      <section id="join">
        <p>
          Zuros Network es un servidor de Minecraft java pero también es un
          servidor de Minecraft Bedrock. ¡Esto significa que puede conectarse
          usando su PC, Mac, teléfono o incluso una consola!
        </p>
        <div className="how-to-join">
          <HowToJoin />
        </div>
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
