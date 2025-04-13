# Zuros Network — Frontend 🌐

Este es el repositorio oficial del **sitio web de Zuros Network**, un servidor de Minecraft multijugador con una comunidad pacífica, inclusiva y sin toxicidad. Este frontend está construido con **React + Vite** y optimizado para ofrecer rendimiento, responsividad y buen SEO.

## 🛠️ Tecnologías

- ⚛️ **React** — Librería principal para la interfaz de usuario
- 🎨 **CSS puro** — Diseño rápido y adaptativo
- 🔗 **React Router** — Enrutamiento SPA
- 🧠 **Lucide-react** — Íconos SVG simples y limpios
- ☁️ **Tebex.js** (utilizado únicamente como **pasarela de pagos** desde el  [backend](https://github.com/ZUROS-NETWORK/zuros-web/tree/main/backend))
---

## 📁 Estructura del proyecto

## 📁 Estructura del proyecto

```
public/                              # Imágenes y recursos estáticos
  ├── fonts/            
  └── img/               
src/
  ├── App/                           # Configuración global, layouts
  ├── assets/                        # No se usa
  ├── components/                    # Componentes reutilizables
  ├── context/                       # Estados globales con React Context
  ├── pages/                         # Páginas del sitio
  ├── services/                      # Funciones que llaman al backend
  └── main.jsx                       # Punto de entrada principal (ReactDOM + router)                 
index.html                     
vite.config.js                 
package.json
README.md
```

---

## 🧪 Desarrollo local

```bash
# Instalar dependencias
npm install

# Correr en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build
npm run preview
```

> El sitio está pensado para funcionar con Cloudflare Pages y Cloudflare Workers

---

## 🚧 En desarrollo

- [ ] Conversión parcial a Astro para mejor SEO
- [ ] Agregar modo oscuro
- [ ] Refactor de CSS a un sistema de estilos más consistente en toda la web
- [ ] Mejorar SEO
- [ ] Mejorar accesibilidad
---

## 🧾 Licencia

Este proyecto está bajo la licencia **MIT**.

---

## 🖇️ Enlaces útiles

- 🔗 Sitio web principal: [https://zuros.xyz](https://zuros.xyz)
- 🗺️ Mapa: [https://map.zuros.xyz](https://map.zuros.xyz)
- 🛒 Tienda: [https://zuros.xyz/tienda](https://zuros.xyz/tienda)
- 💬 Discord: [https://discord.zuros.xyz](https://discord.zuros.xyz)
