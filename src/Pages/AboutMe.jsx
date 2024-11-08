
import { styled } from "styled-components";
import Transition from "../../src/assets/Img/transition.gif";
import Bubble from "../Components/Bubble";

const AboutMeContainer = styled.section`
    background-color: cadetblue;

`
const SectionContainer = styled.div`
    align-items: center;
    display: flex;
    height: 70vh;
    max-width: 1136px;
`

const Paragraph = styled.p`
    flex-wrap: nowrap;
    font-size: 24px;
    gap: 80px;
    padding: 20px 40px;
    text-align: justify;
    color: #000;
`
const Gif = styled.img`
    padding: 20px 40px;
    width: 200px;
`
const AboutMe = () => {
    return(

        <AboutMeContainer>

            <SectionContainer>
                <Paragraph>
                    Industrial Production Technologist passionate about the world of technology and web development. 
                    I love developing and implementing the visual components of a web page, creating a good user 
                    experience and thus achieving a balance between functional and aesthetic design. Every day I 
                    learn to solve logical programming problems efficiently using good practices and frameworks. 
                    I quickly learn new technologies, I have communication skills, creativity, 
                    teamwork and detail orientation.  I am currently part of the One program (Oracle Next Education)
                    and I am a Front-end Web Development student at Alura Latam.
                </Paragraph>

                <Gif src={Transition} alt="Gif"></Gif>

                <Bubble/>

            </SectionContainer>
            

        </AboutMeContainer>
       
    )
}

export default AboutMe;