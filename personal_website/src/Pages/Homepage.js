import './Homepage.css';
import profileImg from '../Assets/Juarez_Benito.jpg';
const Homepage = () =>{
    return(
        <>
            <div className={"gridContainer"}>
                <img src={profileImg} alt={"Profile"} className={"profileImg"}/>
                <div className={"mainTextBox"}>
                    <h2>About Me:</h2>
                    <p>
                        I am currently a Software developer at Paycom Software Inc. where I am utilizing my previous knowledge of web development
                        that I have acquired from my previous experiences to create a better user experience on the application. On my team I take on a
                        multitude of roles so I can best assist my team to finish projects in an efficient manner using the best coding practices possible.
                        I have architected and developed a new process to validate international payrolls which is required to run payrolls for
                        companies in different countries. I have also helped train new developers on my team to get them up to be productive developers as
                        quick as possible. I am always eager to learn and to help anyone to get the job done to further the companies mission.
                    </p>
                    <br/>
                    <p>
                        I am also  recent graduate from Texas State where I received a Bachelor of Science degree in Computer Science
                        with a minor in Applied Mathematics. I was also a member of the Efficient Computing Laboratory (ECL) under
                        Dr. Martin Burtscher where my area of research was lossless audio compression where developed a more efficient
                        compression and decompression algorithm.
                    </p>
                    <h2>Contact:</h2>
                    <p>
                        LinkedIn: <a href="https://www.linkedin.com/in/benito-juarez-92815a221/">https://www.linkedin.com/in/benito-juarez-92815a221/</a>
                    </p>
                    <p>
                        Personal Email: <a href="mailto:juarezb2001@gmail.com">juarezb2001@gmail.com</a>
                    </p>
                </div>
            </div>

        </>
    )
}
export default Homepage;