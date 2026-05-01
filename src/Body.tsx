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


As a student finishing a major in Information Science with a Web Development Tech focus, I will be programming in many of the Front End and Back End programming languages. In that extensive list is TypeScript, which originates from JavaScript, and is a language meant to prevent a multitude of errors in regard to variables while developing code. This error preventing, enables a strong and strategic programming language to increase production flow during compiling times and more enhanced production ready websites. With that in mind, I wanted to attend an online webinar that revolved around this programming language, after all it is this very language that I will be using to create my capstone website to showcase my skills. I was fortunate enough to attend the “How to Use TypeScript Effectively in Backend Applications,” presented by Brandon Ly, a Software Engineer who is currently at MongoDB. Data systems and data structures are becoming harder to understand with so many of their diverse and complex background data types, but this presentation provides a bridge between those backgrounds. In this report I will be reflecting on the information introduced to me by Ly. 


Content Analysis


	Brandon Ly made various important points during his presentation, but there were some that I found more crucial than others to truly understanding what TypeScript offers and does. Ly goes on to explain that many individuals think of TypeScript as some kind of “Safety Net”. As I spoke about in my introduction, the “Type” declaration that TypeScript presents to allows programmers to correct mistakes at run time because they are addressed before compiling. This is important to any Information Science Major, as we deal with all kinds of data daily, but TypeScript can enable us to predetermine what data “type” to accept within our code. Other programming languages take exceptionally large amounts of code to prevent the insertion of the wrong data type, TypeScript already has this integrated. With TypeScript, during development, it will dictate an error message displaying what variable is missing information, and what that missing information should be. If I was working with JavaScript, our “system” could be broken but the code might run, TypeScript does not need to be run for it to enable us to make corrections and adjustments. This system goes beyond a safety net when performed under the right conditions.


Drawbacks


While TypeScript can be an essential tool for any developer working with data on Front End platforms, it needs to be managed correctly for it to function as intended. I found this interesting, without the user fully knowing what information they will be working with, they are forced to use the “any” type declaration. The any allows users to enter values from inputs, without limits on the data acceptable. This seems amazing, but it defeats the purpose of TypeScript, technically speaking, JavaScript inputs already can accept “any” data type. For a programmer to use TypeScript correctly, they must understand that more work in understanding code and entry values might be required, they can never settle for the false security that comes with this programming language, and finally this safety is only processed at compiling time, not runtime (Ly, Brandon, 2025). 


Conclusion


To finalize, I learned the essential rules revolving TypeScript, and its use cases. As I learn more about its incorporation to my already developed tech stack, I will continue to grow as a programmer by fixing mistakes before they happen. All the information presented by Ly is insightful and directly applies to the field I’m currently finishing my education in. In my career I will be working with data, but before I can analyze that data, I could use TypeScript to start filtering out information. This could greatly impact my workflow, by forcing the verification of the structure of my raw data, TypeScript sets in motion more preparation for my R and SQL query clean up.


 References

 
Ly, B. (2025, December — specific day not shown). How to use TypeScript effectively in backend applications. Codementor. https://www.codementor.io/events/how-to-use-typescript-effectively-in-backend-applications-ieg70ay3ro
`
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
        },
        {
            id: 3,
            title: "BSIS Program Review",
            preview: "I am graduating this year with a bachelor's in information science with a Web Development Focus. Throughout my years in college, I have taken some incredibly career defining classes…",
            fullText: `Introduction


My name is Marcos Galdamez Cruz, I am graduating this year with a bachelor's in information science with a Web Development Focus. Throughout my years in college, I have taken some incredibly career defining classes from Page Design/Management to Web Design Technologies, each having their own set of skills that needed to be nurtured to pass the class. Each of those classes enabled me to further progress my knowledge, knowledge that I plan to use in my future career as a Full Stack Developer.


Upper-Level Courses


As I stated in my introduction, I took courses that really leveled up my skillsets. I learned from many amazing professors as well as my classmates. I will present a little bit of information about the classes I enjoyed and received the most benefit from as I prepared myself to become a full fledge Full Stack Developer. To begin, LIS 3361: WWW Page Design/Management where I covered the foundations of planning and execution of a web page. Here I learned the importance of a semantic structure when looking to implementing high SEO scores. Then came LIS 4365: Web Design Technologies where I learned how to incorporate different tools to create and analyze different designs for the best positive feedback. Here I learned how to place myself in a potential client's shoes, understanding their ideas with a deeper context. Beyond the architectural point of view of a website, I had to worry about the security principles beyond a safe web application. Taking LIS 4482: Networks & Communication is where I learned about the different server codes websites can respond with based on input, better known as POST information, and how they align with creating different scenarios for specific situations. As much as Frontend work is fundamentally the most important part of a website since it's what customers first see, the backend is really what enables the functionality of everything. This is where taking COP 2030 and COP 2250 really came in handy. This is where I learned how to read and interpret the information that websites can receive or dish out. Java programming is extremely close to JavaScript and its fundamental principles. Each of these classes really helped me close the gap between zero to hero.


Assignments


There were many fun and exciting assignments I was instructed to complete during my courses in college. Some left a mark more than others; I will elaborate on those that did. My Web Design class provided a project where I analyzed the semantic structure of real websites for businesses, providing a list of suggestions for changes that could increase the overall appeal of the website and increase the SEO score in search engines such as Google. In my capstone class LIS 4934 I was instructed to create a portfolio site that I could use to present my work to potential employers within my desired professional career. I developed the website using a language I was not entirely familiar with to further my coding skills. I used TypeScript to debug my website before even deploying it, preventing commonly known errors at production time. A website I am profoundly proud of creating.


Conclusion


The BSIS program provided by the University of South Florida is incredible. I have mastered many practical concepts that I now am using to apply to jobs and internships. My professional career is a step above those who did not attend a similar program but rather a bootcamp. As I strive for more success, I can look back on assignments or practices I completed during my academic journey and progress even more. Thanks to everything I learned these past four years, I am a full-fledged programmer, just one step closer to gaining a job in Full Stack Development.`
        },
        {
            id: 4,
            title: "Information Policy: Technology in the News",
            preview: "The AI Readiness Gap presents a clear information gap in the current workforce — one that is becoming increasingly reliant on AI technology without the training to support it…",
            fullText: `I found the content in "The AI Readiness Gap: Why Adoption Without Understanding Fails" (Trans, 2025) relatable to both my career and personal beliefs. This event presents a clear information gap that is present in the current workforce, a workforce that is becoming more and more overly reliant on the use of AI technology to cut down long working hours solving one specific problem. This need for AI technology is illuminating another issue. Companies are demanding more from their employees; in multiple cases they are expecting employees to have training on the use of AI tools, which for many is not the case. After analyzing various bills introduced into legislation through the Congress.gov site, I came across one that stood out — one that can also be beneficial to my personal goals as I graduate with my bachelor's degree, and one that would solve the new problem modern workforces are being dealt with. Legislative bill H.R. 2385 (Creating Resources for Every American to Experiment with Artificial Intelligence Act of 2025, 2025) was presented in the house through bipartisan methods, aiming to cut down the knowledge gap between users of AI and their AI tools, which in some parts of the world is becoming a longer bridge dividing workers, students, and other professionals from a proper career. Combining the initiatives from the Bill and the insights provided by the IEEE-USA article, it's clear to see that adapting to AI usage is not just about upgrading technology, but also about policies to protect employees that are slower to adapt to the times.


This bill would enable more people across multiple fields with the access to gaining work readiness information on the use of AI workflows. H.R. 2385 aims to establish a new resource for educators, students, and small businesses with the power of AI tools and how to use them (H.R.2385, 2026). The bill would create the National Artificial Intelligence Research Resource (NAIRR). This bill identifies the problem in gaps with AI adoption and work readiness and produces a solution to solve it.


The stakeholders that would benefit from this bill come from a vast group of individuals. The list includes Researchers, Students, and Small Businesses. In the cases where employers demand adaptation from their workers, it may even extend indirectly to protecting those employees from being fired due to lack of AI usage before being trained on them, or before being allowed the proper grace period to adapt. Without training, some employers might see this new bill as a way for employees to seek out financial retaliation for being let go, which would set a barrier of protection. In this and many cases, the American Government and its people benefit from this bill. It limits the drawbacks from implementing AI across so many jobs. Americans are the stakeholders, because success for the citizens is success for the country.


After analyzing the bill and reading over the event, I concluded that if the job force requires AI, then the law must protect those who have not yet adapted. Some individuals are slower than others in picking up the pace for new workflows. Pew Research states that only nine percent of U.S. workers implement AI into their daily workflows (Trans, 2025). It's only natural for society to evolve at different levels. This bill would increase the potential competitive edge America would hold over other countries who are behind the times. Those quick to adapt and overcome this new era of technology's issues will lead and pave the way into the future. There is one small gap in the bill — it presents a solution to the lack of technology access, but for a complete achievement, it should also provide free resources so that people can learn how to use those technological supplies. As an information professional myself, I understand that technology is necessary for growth, but the lack of it should not damage the workforce. While bill H.R. 2385 is targeted for areas outside of major industry jobs, it will have an impact across the entire region, directly or indirectly. This bill will allow individuals to increase their knowledge on AI and its limits, while preparing them for jobs that use AI tools. This will protect more jobs and, in some cases, maybe even create some new ones.


Conclusion


In conclusion, the world is changing — our era is turning into the peak of AI growth, and it is not slowing down. Most policies revolving AI are late to arrive, but in this case, I believe this bill sets a precedent and protects individuals that are not yet tasked with working with AI. Bills that come from congress should predict what might happen before it does, instead of trying to address problems that continue to evolve into new areas. Legislative makers tend to argue about policies for years without coming to similar conclusions, which is why I restate the need for predicting problems before they arise, and addressing them early or before they occur — to stay ahead of the curve, not behind it.


References


Creating Resources for Every American To Experiment with Artificial Intelligence Act of 2025, H.R. 2385, 119th Cong. (2025). https://www.congress.gov/bill/119th-congress/house-bill/2385


Trans, H. H. (2025, July 22). The AI readiness gap: Why adoption without understanding fails. IEEE-USA InSight. https://insight.ieeeusa.org/articles/the-ai-readiness-gap-why-adoption-without-understanding-fails/`
        },
        {
            id: 5,
            title: "Ethical Case Study Analysis: The Internet of Things",
            preview: "IoTs — Internet of Things — relates to technological products connected through the internet within a home, car, jobsite, and more. Advancements in technology are a double-edged sword…",
            fullText: `Introduction


Before diving into my critical thinking around IoTs, I need to explain what it is. For those who are not aware of the term, IoTs is Internet of Things. IoT relates to technological products connected through the internet within a home, car, jobsite, etc. Advances in technology overall have made these items more and more accessible; they can be found in anything and almost everything. IoTs will continue to grow and expand its reach even more as humans become more codependent and, in some cases, absolutely dependent on technology. With that expansion, although a lot of positivity can be found, it does not come without its trade of the opposite karma. Advancements in technology are a double-edged sword. It is those implications that I will cover in this paper using my critical thinking skills, exploring problems arising in ethical and political spaces.


The Core of IoTs


I watched a TED Talk — a little outdated, but its relevance in topics remains true to this day. First, it addresses how a long time ago, the human population was not overly reliant on items connected to the internet, but that by 2020 that number would have increased (Pollina, 2013). The video also speaks to the truth about how, with the advancements in technology, wearable items that act as sensors will collect information about the user — in some cases leading to the company who owns those items knowing more about the user than their own medical provider. I can attest to this. With medical pricing rising in the United States of America, I have overheard many conversations between classmates where it's cheaper to buy an Apple Watch to track healthy habits than it is for a doctor to address those habits. Some individuals would rather relinquish their data to companies than allow a doctor's visit to address their concerns. Ideally everyone would like to visit a doctor, but that's not the case for most individuals suffering from the current economic hardships. That's where my next topic of choice arises.


Ethical Implications


One of the biggest concerns when it comes to companies collecting data on their users is their access to that data. Data runs the modern world; a habit, while measured for good faith, can be used directly to provide surveillance over a person. For example, Susan Hennessey, when speaking to Jack Karsten for the TechTakes article, showcases that a prime usage of IoTs could be its information collection that fills in many gaps on the general public (Karsten, 2016). Eavesdropping could become the new hobby for technologists and tech-savvy individuals if that information falls into the wrong hands — and that creates another question: what policies are being made in order to prevent the misuse of information?


Politics Surrounding IoTs


Politics will play a crucial part in the innovations that come after this decade, and even in the ones happening now. To dive deeper, we must speak about how politics are having a hard time catching up in the technological race. Companies are developing and unveiling new information practices every minute, every hour, every day. That will not change — all it takes is for one company to declare their product ready for market and it goes on the shelves for sale. For policies, it's not simply black and white. Law makers spend hours, to days, to years devoting time and resources to argue the case for or against innovation — not overall innovation, but one specific portion of it. While those policies are debated, technology is not placed on hold; it keeps advancing without limitations being placed on the current race. Without new policies in place, there could be more drawbacks than positive outcomes thanks to IoT. For example, "In order to take full advantage of the cornucopia, companies must ensure that they have in place robust and adequate privacy policies so that customers understand what data are being collected and consent to their use" (Singer & Perry, 2015). Information without proper control can be used against the very people it's meant to help progress — policy is necessary from beginning to end.


Effects to My Career


I am currently pursuing an Information Science Degree at the University of South Florida. As a student, I can see and understand that policies are necessary for data to be used properly to help humanity. I have witnessed students and professionals alike use technology to make their assignments easier, to take advantages of weak systems. That needs to change. Without adequate policies in place, technology will eventually divide people instead of unifying and making their lives easier — which is what the creation of IoTs was intended for. My career will most likely lead me to paths where I have to correct the use of information, or it will provide me a path to creating tools that defend the proper use of data.


Conclusion


In conclusion, IoTs provides so many benefits to humanity when used properly and with the right intentions in mind. Sometimes users or companies will misuse that information, both directly and indirectly — it is in those times that policies will play a drastic role. I hope that technology allows for policies to catch up before too many harms can be made. IoTs can connect us more, make our lives easier to handle, but it should never do the opposite.


References


Karsten, J. (2016). Alternative perspectives on the internet of things. Brookings. https://www.brookings.edu/blog/techtank/2016/03/25/alternative-perspectives-on-the-internet-of-things/


Pollina, N. (2013). What is the internet of things? [Video]. TedEd. http://ed.ted.com/on/VGdKwYzz#watch


Singer, R. W., & Perry, A. J. (2015). Wearables: the well-dressed privacy policy. Intellectual Property & Technology Law Journal, 27(7), 24+. https://link.gale.com/apps/doc/A420929651/AONE?u=tamp44898&sid=bookmark-AONE&xid=74b7983c`
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
