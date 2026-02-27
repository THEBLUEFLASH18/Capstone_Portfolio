import { useState } from "react";
import './Body.css'


function Body() {

    // ── About Me ───────────────────────────────────────────────
    type EssayModel = {
        text: string;
        previewChars: number;
    };

    const essay: EssayModel = {
        text: `My name is Marcos Galdamez Cruz. I reside in Tampa, Fl but I'm originally from San Pedro Sula, Honduras. I was blessed with the opportunity to come to the USA as a permanent Resident in 2007. I have traveled often back and forth to visit Honduras, my connection to the culture there has not faltered. I am fluent in Spanish, and English while being well versed in the Honduran dialect of as well. I want to become a full-fledged Full Stack Developer, and my degree reflects that ambition, I am graduating in May with an Information Science bachelor's degree with a focus on Web Development. I have received numerous certifications over the last couple of years while attending college. I have a Front-End Development as well as multiple backend programming related certifications. I have created and managed Web applications and dynamic websites for multiple companies in Honduras, as well as participated in an Internship with Resilience Inc.
        I want to provide further information about my goals. I have always loved the creativity that is needed to design and create websites. I love finding unique ways to represent a company or business' story. Right now, Full Stack Development is very much still in need. I know that for many, there is uncertainty thanks to AI continuing to be developed at the speed that it is, but AI is still not capable of producing the ideal image for companies and businesses. That lack of understanding might be reached one day, but at that point, developers will just use AI to complement their work speeds. AI is not a tool to replace human; it's a tool to speed up the workflow humans can produce. This field requires a deep understanding of the development stacks; I have ventured into becoming a polymath so that I can adapt to any job/task in the future. 
        I received my associate's degree from Hillsborough Community College, while I was fortifying my programming skills from websites like Codecademy, FreeCodeCamp, among many others. My knowledge in programming is well oriented, I can proactively program in Python, PHP, HTML5, CSS, JavaScript, React, TypeScript, R, and SQL. I have experience with manipulating and visual representing the raw data into information that can be used to make business decisions. I can understand and use APIs, and various IDEs. 
        Through my history in the labor workforce, I have developed a clear understanding for adaptability. Different needs can only be solved by interpreting and balancing new information, and being able to adapt in those rigorous scenarios is incredibly important. My general work related skills include teamwork, customer service, communication, time management, problem-solving, and critical thinking. 
        To end this proper introduction, I would like to reflect on what my desires are for my career. I want to become a full-fledged full stack developer, I do not have enough pragmatic experience yet, but I am continuing to develop. As I outlook expectations I come to the following conclusion, I want to earn a good salary ranging between 70,000 and 100,000 with a company that provides continuous opportunities for growth. Ideally, I would love to start working for an up and coming start-up, one that values their starting employees, and allows them to advance and progress as the company improves in market value. I will like and will push myself to learn even more programming languages, and learn to intergrade LLMs and AI agents to further deepen my understanding of what it means to be a Developer in the current age of technology that we live in. The future revolves around AI usage and I do not want to fall behind. 
        `,
        previewChars: 190
    };


    type BlogPost = {
        id: number;
        title: string;
        preview: string;
        fullText: string;
    };

    const blogs: BlogPost[] = [
        {
            id: 1,
            title: "TypeScript Webinar Reflection",
            preview: "As a student finishing a major in Information Science with a Web Development Tech focus, I will be programming in many of the Front End and Back End programming languages.",
            fullText: `Introduction 


            As a student finishing a major in Information Science with a Web Development Tech focus, I will be programming in many of the Front End and Back End programming languages. 
            In that extensive list is TypeScript, which originates from JavaScript, and is a language meant to power the prevention of errors in variables when programming. 
            This error preventing strategic programming language leads to better compiling times and more enhanced production ready websites. With that in mind, I wanted to 
            attend an online webinar that revolved around this programming language, after all it is this very language that I will be using to create my capstone website to 
            show case my skills. I was fortunate enough to attend the “How to Use TypeScript Effectively in Backend Applications,” presented by Brandon Ly, a Software Developer 
            who is currently an engineer at MongoDB. Data systems and Data Structures are becoming harder to understand with so many of their diverse and complex background data 
            types, this presentation provides a bridge between those backgrounds. In this report I will be reflecting on the information introduced to me by Ly. 

            Content Analysis 


            Brandon Ly made various important points during his presentation, but there were some that I found more crucial than others to truly understanding what TypeScript 
            offers and does. Ly goes on to explain that many individuals think of TypeScript as some kind of “Safety Net”. As I spoke about in my introduction, the “Type” 
            declaration that TypeScript presents in order to prevent mistakes at run time and compiling errors. This is important to any Information Science Major, as we deal 
            with all kinds of data daily, but TypeScript can enable us to predetermine what data “type” to accept within our code. Other programming languages take additional 
            code to prevent the insertion of the wrong data type, TypeScript already has this integrated. Any company would be happy to speed up their workflow and its clear 
            that if I can master this tool, it will raise my expertise level dramatically.`
        },
        {
            id: 2,
            title: "Exploring React Server Components",
            preview: "React Server Components represent a paradigm shift in how we build web applications — blurring the line between server and client in ways previously unseen…",
            fullText: `React Server Components represent a paradigm shift in how we build web applications — blurring the line between server and client in ways that were previously only possible with frameworks like Next.js under the hood.

            Traditional React components always run in the browser. Every component you write is shipped to the client as JavaScript, hydrated, and then executed. This is fine for interactive UI, but it means you're sending code to the client even for components that never need to react to user input.

            Server Components flip this on its head. They render on the server and send only the resulting HTML to the client — zero JavaScript bundle cost. This is a game changer for performance. A blog post renderer, a data table, or a markdown previewer doesn't need state or event listeners. Server Components let you fetch data directly inside the component using async/await without needing useEffect or a separate data-fetching library.

            The mental model shift is significant though. You have to think clearly about the boundary between server and client. Anything that needs browser APIs, useState, or useEffect must be a Client Component, marked with "use client" at the top of the file.

            From a developer experience standpoint, the co-location of data fetching and rendering is incredibly elegant. No more prop-drilling data from a page-level getServerSideProps down to the component that actually needs it. The component that renders the data is also the component that fetches it.

            I'm excited to continue experimenting with this pattern — especially how it interacts with caching and streaming in Next.js 14+.`
        }
    ];

    const BLOG_PREVIEW_CHARS = 150;


    const [expanded, setIsExpanded] = useState(false);
    const [activeBlog, setActiveBlog] = useState<BlogPost | null>(null);

    const shouldTruncate = essay.text.length > essay.previewChars;

    const displayText =
        expanded || !shouldTruncate
            ? essay.text
            : essay.text.slice(0, essay.previewChars).trimEnd() + "…";

    return (
        <>

            {activeBlog && (
                <div className="modal-backdrop" onClick={() => setActiveBlog(null)}>
                    <div className="modal-card" onClick={e => e.stopPropagation()}>
                        <div className="modal-head">
                            <span>{activeBlog.title}</span>
                            <button className="modal-close" onClick={() => setActiveBlog(null)}>✕</button>
                        </div>
                        <div className="modal-body">
                            {activeBlog.fullText.split('\n\n').map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>
                    </div>
                </div>
            )}


            <section>
                <h2>About Me</h2>
                <p>{displayText}</p>
                {shouldTruncate && (
                    <button className="read-more-btn" onClick={() => setIsExpanded(!expanded)}>
                        {expanded ? "Read Less" : "Read More..."}
                    </button>
                )}
            </section>


            <section>
                <h2>Experience</h2>
                <div className="cards-container">

                    <div className="card">
                        <div className="head">Nice View Window Cleaning LLC</div>
                        <div className="content">
                            <ul className="card-list">
                                <li>Built lead conversion tool → +10% job requests & +5% revenue</li>
                                <li>OpenStreetMap API for service area mapping → ↑ customer satisfaction</li>
                                <li>Google Business API reviews → 100% trust retention</li>
                            </ul>
                            <button className="button">Lafayette, CO</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="head">Avizorca</div>
                        <div className="content">
                            <ul className="card-list">
                                <li>Netlify + Google Sheets API entry form → +22% production speed</li>
                                <li>Informational website → +10% clientele & +5% revenue</li>
                            </ul>
                            <button className="button">San Pedro Sula, HN</button>
                        </div>
                    </div>

                </div>
            </section>

            {/* ── Skills ────────────────────────────────────── */}
            <section>
                <h2>Skills</h2>
                <div className="skills-container">

                    <div className="skills-group">
                        <h3 className="skills-label">Languages</h3>
                        <div className="skills-pills">
                            {["HTML5", "CSS3", "JavaScript", "TypeScript", "Python", "R", "SQL", "Java", "PHP"].map(lang => (
                                <span key={lang} className="skill-pill">{lang}</span>
                            ))}
                        </div>
                    </div>

                    <div className="skills-group">
                        <h3 className="skills-label">Frameworks</h3>
                        <div className="skills-pills">
                            {["React", "Node.js", "Express.js", "Bootstrap", "Tailwind CSS", "Jest"].map(fw => (
                                <span key={fw} className="skill-pill">{fw}</span>
                            ))}
                        </div>
                    </div>

                    <div className="skills-group">
                        <h3 className="skills-label">Libraries</h3>
                        <div className="skills-pills">
                            {["jQuery", "D3.js", "Three.js", "Axios", "Font Awesome", "SASS", "Firebase JS SDK", "Anime.js", "Spline", "Google Fonts"].map(lib => (
                                <span key={lib} className="skill-pill">{lib}</span>
                            ))}
                        </div>
                    </div>

                    <div className="skills-group">
                        <h3 className="skills-label">Developer Tools</h3>
                        <div className="skills-pills">
                            {["VS Code", "Atom", "Obsidian", "Oracle", "Docker", "GitHub Desktop", "Azure Data Studio", "Git", "Webpack", "Chrome DevTools", "Microsoft Teams", "Figma"].map(tool => (
                                <span key={tool} className="skill-pill">{tool}</span>
                            ))}
                        </div>
                    </div>

                    <div className="skills-group">
                        <h3 className="skills-label">Package Managers</h3>
                        <div className="skills-pills">
                            {["NPM", "YARN"].map(pm => (
                                <span key={pm} className="skill-pill">{pm}</span>
                            ))}
                        </div>
                    </div>

                </div>
            </section>


            <section>
                <h2>Blogs</h2>
                <div className="cards-container">
                    {blogs.map(blog => (
                        <div className="card" key={blog.id}>
                            <div className="head">{blog.title}</div>
                            <div className="content">
                                <p className="blog-preview">
                                    {blog.preview.slice(0, BLOG_PREVIEW_CHARS).trimEnd() + "…"}
                                </p>
                                <button className="button" onClick={() => setActiveBlog(blog)}>
                                    Read More...
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
export default Body;
