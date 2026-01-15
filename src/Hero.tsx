import './Hero.css'
import Marcos from '/Users/theblueflash/Desktop/Capstone_Portfolio/public/MarcosG.png'



function Hero() {
    return (
        <>
            <div className='grid-container'>
                <div className='box' style={{ gridArea: "box1" }}></div>
                <div className='box' style={{ gridArea: "box2" }}>
                    <h1><span>Education</span></h1>
                    <p>BS Information Science -  Web Development Tech <span>2026</span></p>
                </div>
                <div className='box' style={{ gridArea: "box3" }}>
                    <img src={Marcos} alt="" />
                </div>
                <div className='box' style={{ gridArea: "box4" }}></div>
                <div className='box' style={{ gridArea: "box5" }}>
                    <h1><span>About Me</span></h1>
                    <p>Hi, I'm Marcos Galdamez. I'm a Full Stack Developer with a passion for creating engaging and user-friendly web applications.
                        With a strong foundation in both frontend and backend technologies, I enjoy crafting innovative solutions that enhance user experience. Let's build something amazing together!
                    </p>
                </div>
                <div className='box box6' style={{ gridArea: "box6" }}>
                    <h1><span>Skills</span></h1>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                    <ul>
                        <li>Python</li>
                        <li>SQL</li>
                        <li>Git</li>
                    </ul>
                    <ul>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>GitHub</li>
                    </ul>
                </div>
            </div>
        </>
    )
};

export default Hero;