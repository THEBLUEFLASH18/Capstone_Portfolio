import './Hero.css'


function Hero() {
    return (
        <>
            <main className="hero">
                <section className="hero-text">
                    <h2>Hello! I'm </h2>
                    <h1>Marcos Galdamez</h1>
                    <br />
                    <p>A Full Stack Developer</p>
                </section>
                <section className="hero-img">
                    <img src="/public/MarcosG.png" alt="Professional Portrait of Marcos Galdamez" />
                </section>
            </main>
        </>
    )
};

export default Hero;