import "./styles.css";
export function VisionCards() {
    return (
        <>
            <div className="vision-text-center">
                <h2 className="vision-title">Nuestra visión</h2>
                <p className="vision-subtitle">Estos son los principios que guían nuestra comunidad</p>
            </div>

            <div className="vision-grid">
                <div className="vision-card pink">
                    <div className="vision-card-icon">

                        <svg xmlns="http://www.w3.org/2000/svg" className="vision-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                        </svg>
                    </div>
                    <h3>Inclusivo</h3>
                    <p>Zuros es un servidor de Minecraft para todos. 100% LGBTQ+ friendly. Todas las plataformas soportadas. Ven y juega en zuros, ya sea que tengas un teléfono o una PC Gamer.</p>
                </div>

                <div className="vision-card purple">
                    <div className="vision-card-icon">

                        <svg xmlns="http://www.w3.org/2000/svg" className="vision-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        </svg>
                    </div>
                    <h3>Juego limpio</h3>
                    <p>Aceptamos donaciones. Nos encantan las donaciones. Pero no vendemos artículos ni ventajas con precios excesivos o sobrecargados. Recompensamos cada donación con artículos balanceados.</p>
                </div>

                <div className="vision-card blue">
                    <div className="vision-card-icon">

                        <svg xmlns="http://www.w3.org/2000/svg" className="vision-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                            <path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path>
                        </svg>
                    </div>
                    <h3>Fácil y Sencillo</h3>
                    <p>Hicimos que zuros fuera un servidor fácil de usar y comprender. No es necesario navegar a través de complejos tutoriales, simplemente únase use /tpr y será teletransportado de forma aleatoria que lo sacará de la región del spawn.</p>
                </div>
            </div>
        </>
    )
}