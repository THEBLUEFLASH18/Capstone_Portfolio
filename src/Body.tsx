import { useState } from "react";
import './Body.css'


function Body(){

    type EssayModel = {
        text: string;
        previewChars: number;
    };

    const essay: EssayModel = {
        text: `My name is Marcos Galdamez Cruz. I reside in Tampa, Fl but I’m originally from San Pedro Sula, Honduras. I was blessed with the opportunity to come to the USA as a permanent Resident in 2007. I have traveled often back and forth to visit Honduras, my connection to the culture there has not faltered. I am fluent in Spanish, and English while being well versed in the Honduran dialect of as well. I want to become a full-fledged Full Stack Developer, and my degree reflects that ambition, I am graduating in May with an Information Science bachelor’s degree with a focus on Web Development. I have received numerous certifications over the last couple of years while attending college. I have a Front-End Development as well as multiple backend programming related certifications. I have created and managed Web applications and dynamic websites for multiple companies in Honduras, as well as participated in an Internship with Resilience Inc.
        I want to provide further information about my goals. I have always loved the creativity that is needed to design and create websites. I love finding unique ways to represent a company or business’ story. Right now, Full Stack Development is very much still in need. I know that for many, there is uncertainty thanks to AI continuing to be developed at the speed that it is, but AI is still not capable of producing the ideal image for companies and businesses. That lack of understanding might be reached one day, but at that point, developers will just use AI to complement their work speeds. AI is not a tool to replace human; it’s a tool to speed up the workflow humans can produce. This field requires a deep understanding of the development stacks; I have ventured into becoming a polymath so that I can adapt to any job/task in the future. 
        I received my associate’s degree from Hillsborough Community College, while I was fortifying my programming skills from websites like Codecademy, FreeCodeCamp, among many others. My knowledge in programming is well oriented, I can proactively program in Python, PHP, HTML5, CSS, JavaScript, React, TypeScript, R, and SQL. I have experience with manipulating and visual representing the raw data into information that can be used to make business decisions. I can understand and use APIs, and various IDEs. 
        Through my history in the labor workforce, I have developed a clear understanding for adaptability. Different needs can only be solved by interpreting and balancing new information, and being able to adapt in those rigorous scenarios is incredibly important. My general work related skills include teamwork, customer service, communication, time management, problem-solving, and critical thinking. 
        To end this proper introduction, I would like to reflect on what my desires are for my career. I want to become a full-fledged full stack developer, I do not have enough pragmatic experience yet, but I am continuing to develop. As I outlook expectations I come to the following conclusion, I want to earn a good salary ranging between 70,000 and 100,000 with a company that provides continuous opportunities for growth. Ideally, I would love to start working for an up and coming start-up, one that values their starting employees, and allows them to advance and progress as the company improves in market value. I will like and will push myself to learn even more programming languages, and learn to intergrade LLMs and AI agents to further deepen my understanding of what it means to be a Developer in the current age of technology that we live in. The future revolves around AI usage and I do not want to fall behind. 
        `, previewChars: 200 
    };

    const [expanded, setIsExpanded] = useState(false);

    const shouldTruncate = essay.text.length > essay.previewChars;

    const displayText =
    expanded || !shouldTruncate
      ? essay.text
      : essay.text.slice(0, essay.previewChars).trimEnd() + "…";

    return (
        <>
        <section>
            <h2>About Me</h2>
            <p>{displayText}</p>
            {shouldTruncate && <button onClick={() => setIsExpanded(!expanded)}>{expanded ? "Read Less" : "Read More..."}</button>}
        </section>
        </>
    )
}
export default Body;
