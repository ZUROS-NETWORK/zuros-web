import { Helmet } from "react-helmet-async";
import { useLocation } from 'react-router-dom';

const pageData = {
  '/tienda': {
    title: "Tienda de Zuros Network",
    description: "Descubre la tienda de Zuros Network y lleva tu experiencia de Minecraft al siguiente nivel. Personalizar tu mundo y has de cada partida una aventura única. zuros un espacio creado para todos. ¡Haz que tu travesía sea inolvidable!"
  },
  '/info': {
    title: "Acerca de Zuros Network - El Mejor Servidor de Minecraft",
    description: "Conoce más sobre Zuros Network, un servidor inclusivo y libre de toxicidad para jugadores de Minecraft."
  },
  '/legal-terms': {
    title: "Términos y condiciones de Zuros Network",
    description: "Términos y condiciones de uso."
  },
  default: {
    title: "ZUROS NETWORK - Servidor de Minecraft Survival y Minijuegos",
    description: "Únete a Zuros Network, un servidor de Minecraft inclusivo y libre de toxicidad. Compatible con Java y Bedrock."
  }
};

export function SEO() {
  const location = useLocation(); 

  const { title, description } = pageData[location.pathname] || pageData.default;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Zuros Network" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
