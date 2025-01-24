import "./Resume.css"
const Resume = () => {
    return (
        <>
            <h2 className={"header"}>Resume:</h2>
            <div className={"mainTextbox"}>
                <h3>Education:</h3>
                <b>Texas State University</b>
                <p>Bachelor of Science in Computer Science<br/>
                    Minor in Applied Mathematics<br/>
                    Graduated May 2023</p>
            </div>
            <div className={"mainTextbox"}>
                <h3>Work Experience:</h3>

                <b>Software Developer IV @ <a href={"https://www.paycom.com/"}>Paycom Software, Inc.</a></b>
                <b>June 2023 - Present</b>
                <ul>
                    <li>Architected and developed a payroll validation process for international government agencies, enhancing data integrity and compliance.</li>
                    <li>Collaborated with Product Managers to define functional specifications that meet the evolving needs of clients.</li>
                    <li>Refactored SPA pages by removing deprecated components, improving user experience, and streamlining performance.</li>
                    <li>Designed and implemented RESTful APIs to automate data retrieval and updates, significantly improving client workflows.</li>
                    <li>Created MySQL database tables to ensure efficient, load-sensitive data storage accessible by multiple teams.</li>
                    <li>Diagnosed and resolved client-facing issues, ensuring timely, high-quality fixes.</li>
                </ul>

                <b>Front-End Web Developer @ <a href={"https://spexodisks.com/"}>SpexoDisks</a></b>
                <b>January 2023 - June 2023</b>
                <ul>
                    <li>Redesigned the UI of the website to create a modern, cohesive user experience.</li>
                    <li>Developed reusable, modular components to improve code maintainability and UI consistency.</li>
                    <li>Overhauled the front-end codebase for responsiveness across various screen sizes, ensuring optimal display on all devices.</li>
                    <li>Collaborated closely with project leads to convert design concepts into production-ready web components.</li>
                </ul>

                <b>Software Development Intern @ Paycom Software, Inc.</b>
                <b>May 2022 - August 2022</b>
                <ul>
                    <li>Created a responsive single page application using the React framework.</li>
                    <li>Designed MySQL database tables to dynamically support SPA features and content.</li>
                    <li>Enhanced legacy PHP code to handle dynamic data updates via MySQL.</li>
                    <li>Worked within an Agile environment using GitLab for version control and project management.</li>
                    <li>Coordinated with team members to create UI mockups and project plans on Confluence.</li>
                </ul>
                <b>Student Worker @ The Department of Marketing at Texas State University</b>
                <b>August 2019 - December 2022</b>
                <ul>
                    <li>Over 3 years of work experience in a professional office setting.</li>
                    <li>Assisted students with questions regarding staff and courses.</li>
                    <li>Assisted staff with various tasks relating to their courses.</li>
                    <li>Set up various forms of technology, such as computers and printers, for the office and staff.</li>
                    <li>Maintained the office’s cleanliness and restocked supplies.</li>
                </ul>
                <b>References</b>
                <ul>
                    <li>Aditya Dave - Technical Lead - Phone: 979-739-0411</li>
                    <li>Dr. Caleb Wheeler – Detector Readout Development Scientist - Phone: 314-283-8383</li>
                    <li>Tecpal SolisRayos - Previous Team Lead and mentor - Phone: 915-990-5187</li>
                    <li>Cheryl Contreras - Previous Employer - Work Phone: 512-245-7467</li>
                </ul>
            </div>
            <div className={"mainTextbox"}>
                <h3>Relevant Coursework:</h3>
                <b>Data Structures & Algorithms</b>
                <ul>
                    <li>Gathered a more comprehensive look at advanced data structures and basic common algorithms.</li>
                    <li>Implemented the use of data structures and algorithms on those data structures in C++.</li>
                    <li>Introduction to advanced algorithms such as Dijkstra’s graph algorithm.</li>
                </ul>
                <b>Fundamentals of Algorithms Design and Analysis</b>
                <ul>
                    <li>Conducted through the Engineer in Residence program in collaboration with Facebook.</li>
                    <li>Gained a more in-depth look into popular advanced algorithms and their functions commonly used in
                        software engineering.</li>
                    <li>Implemented advanced algorithms to solve common problems in C++.</li>
                </ul>
            </div>
            <div className={"mainTextbox"}>
                <h3>Projects:</h3>
                <a href={"http://www.spacevision.one"}><b>Space Vision</b></a>
                <ul>
                    <li>Frontend Website created using React and multiple UI libraries to present the user with a modern looking website.</li>
                    <li>Displayed data from NASA’s open APIs to allow the user to easily view the data.</li>
                    <li>Project was created by a team of four and progress was managed using Jira and Bitbucket.</li>
                    <li>Version control and merging of changes was completed using Git.</li>
                    <li>Website is hosted on a personal Linux machine using Apache HTTP Server Software.</li>
                </ul>
                <b>Parallel Lossless Audio Codec (PLAC)</b>
                <ul>
                    <li>Lossless audio codec aimed at WAV file compression and decompression.</li>
                    <li>Utilizes the parallel capabilities of the CPU and GPU using OpenMP and the CUDA Framework.</li>
                    <li>Both the CPU and GPU codecs are compatible with each other.</li>
                    <li>Achieves higher throughput compared to ALAC, FLAC, and WavPack.</li>
                    <li>The research project received the CS Research Excellence Award from Texas State University.</li>
                </ul>
            </div>
            <div className={"mainTextbox"}>
                <h3>Technical Skills:</h3>
                <b>Programming Languages:</b>
                <p>Experienced in C++, HTML/CSS, JavaScript, TypeScript, Python, PHP, and SQL.</p>
                <b>Frameworks and Technologies:</b>
                <p>React.js, Linux, and Git.</p>
            </div>

        </>
    )
}
export default Resume;