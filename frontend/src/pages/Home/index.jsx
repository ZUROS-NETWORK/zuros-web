import HeroSection from "../../components/HomeSections/Hero";
import { PlatformCards } from "../../components/HomeSections/PlatformCards";
import { VisionCards } from "../../components/HomeSections/VisionCards";
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
<HeroSection/>
      <section id="join">
          <PlatformCards/>
      </section>
     
      <section className="vision-section">
         <VisionCards/>
      </section>
    </>
  );
};
