import './styles.css'
import { useEffect, useState } from 'react';

const images = [
    '/img/ss/2.png',
    '/img/ss/11.png',
    '/img/ss/6.png',
    '/img/ss/12.png',
    '/img/ss/3.png',
    '/img/ss/4.png',
    '/img/ss/5.png',
    '/img/ss/1.png',
    '/img/ss/7.png',
    '/img/ss/8.png',
    '/img/ss/9.png',
    '/img/ss/10.png',
    '/img/ss/13.png',
    '/img/ss/14.jpg',
    '/img/ss/15.png'
];


export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % images.length);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero-content">
            <div className="hero-image-section">
                <div className="hero-gradient-bg"></div>
                <div className="hero-image-wrapper">
                    <div className="hero-image-box image-flip">
                        {images.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                loading="lazy"
                                alt="Zuros network"
                                className={`hero-slide ${i === currentIndex ? 'active' : ''}`}
                            />
                        ))}
                    </div>
                </div>
                <div className="hero-star-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                </div>
            </div>

            <div className="hero-text-section">
                <h2>Un servidor único para todos</h2>
                <p>Zuros network es uno de los mejores y más exclusivos servidores de Minecraft survival y de minijuegos. Aquí puedes disfrutar de una experiencia de Minecraft sin toxicidad, un lugar pacífico para todos. Fiel al juego, agregando muchas mejoras en la calidad de vida.</p>
            </div>
        </section>
    );
}
