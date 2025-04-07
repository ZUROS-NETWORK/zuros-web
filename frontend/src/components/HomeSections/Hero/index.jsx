import './styles.css'
import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

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
    const [prevIndex, setPrevIndex] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setPrevIndex(currentIndex);
            setCurrentIndex((currentIndex + 1) % images.length);

            setTimeout(() => {
                setPrevIndex(null);
            }, 800);
        }, 8000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <section className="hero-content">
            <div className="hero-image-section">
                <div className="hero-gradient-bg"></div>
                <div className="hero-image-wrapper">
                    <div className="hero-image-box">
                         <img
                            src={images[currentIndex]}
                            className="hero-slide bottom"
                            alt="Current"
                        />
                        {prevIndex !== null && (
                            <img
                                src={images[prevIndex]}
                                className="hero-slide top animate-out"
                                alt="Previous"
                            />
                        )}
                       
                    </div>
                </div>
                <div className="hero-star-icon">
                    <Star height='26px' width='26px' />
                </div>
            </div>

            <div className="hero-text-section">
                <h2>Un servidor único para todos</h2>
                <p>Zuros network es uno de los mejores y más exclusivos servidores de Minecraft survival y de minijuegos. Aquí puedes disfrutar de una experiencia de Minecraft sin toxicidad, un lugar pacífico para todos. Fiel al juego, agregando muchas mejoras en la calidad de vida.</p>
            </div>
        </section>
    );
}
