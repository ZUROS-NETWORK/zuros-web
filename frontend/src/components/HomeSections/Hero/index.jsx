import './styles.css'
import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

const initialImages = [
    '/img/hero-slider/1744356997526.webp', '/img/hero-slider/1744357168337.webp',
    '/img/hero-slider/1744357333135.webp', '/img/hero-slider/1744357265973.webp',
    '/img/hero-slider/1744357401352.webp', '/img/hero-slider/1744357554993.webp',
    '/img/hero-slider/1744357514740.webp',
];

export default function HeroSection() {
    const [images, setImages] = useState(initialImages);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(null);
    const [jsonLoaded, setJsonLoaded] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setPrevIndex(currentIndex);
            setCurrentIndex((currentIndex + 1) % images.length);
            setTimeout(() => setPrevIndex(null), 800);
        }, 8000);

        return () => clearInterval(interval);
    }, [currentIndex, images.length]);

    useEffect(() => {
        const nextIndex = (currentIndex + 1) % images.length;
        const img = new Image();
        img.src = images[nextIndex];
    }, [currentIndex, images]);

    useEffect(() => {
        if (!jsonLoaded && currentIndex === images.length - 2) {
            fetch('https://cdn.zuros.xyz/nocache/slider-img-map.json')
                .then(res => res.json())
                .then(data => {
                    if (Array.isArray(data) && data.every(item => typeof item === 'string')) {
                        setImages(prev => [...prev, ...data]);
                        setJsonLoaded(true);
                    } else {
                        console.error(data);
                    }
                })
                .catch(err => {
                    console.error('Error:', err);
                });
        }
    }, [currentIndex, jsonLoaded, images.length]);

    return (
        <section className="hero-content">
            <div className="hero-image-section">
                <div className="hero-gradient-bg"></div>
                <div className="hero-image-wrapper">
                    <div className="hero-image-box">
                        <img
                            src={images[currentIndex]}
                            className="hero-slide bottom"
                            alt={`Zuros, el mejor servidor de Minecraft ${currentIndex + 1}`}
                        />
                        {prevIndex !== null && (
                            <img
                                src={images[prevIndex]}
                                className="hero-slide top animate-out"
                                alt={`Zuros, el mejor servidor de Minecraft (${prevIndex + 1})`}
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
                <p>
                    Zuros network es uno de los mejores y más exclusivos servidores de Minecraft survival y de minijuegos.
                    Aquí puedes disfrutar de una experiencia sin toxicidad, un lugar pacífico para todos.
                    Fiel al juego, con muchas mejoras en la calidad de vida.
                </p>
            </div>
        </section>
    );
}
