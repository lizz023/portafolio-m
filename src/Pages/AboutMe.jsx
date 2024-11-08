
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

    @media screen {
        flex-direction: column;
    }
`

const Paragraph = styled.p`
    flex-wrap: nowrap;
    font-size: 24px;
    gap: 80px;
    padding: 20px 40px;
    text-align: justify;
    color: #000;
    font-size: 16px;
    
    @media (min-width: 1136px) {
        font-size: 28px;
    }
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
                    
                    Front-End Developer Junior, I love developing and implementing the visual components of a web page, creating a good experience for the user and thus achieving a balance between functional and aesthetic design, my knowledge is: HTML, CSS, JAVASCRIPT, REACT, NODE .JS, SQL, MYSQL, MONGO DB, PYTHON. My soft skills are: teamwork, assertive communication, creativity, problem solving. 
                    
                    I am looking for an opportunity to acquire my first experience in web development and be able to demonstrate my full potential.
                    
                    I am currently doing an internship as a full stack developer at Grupo ConsulTIC
                </Paragraph>

                <Gif src={Transition} alt="Gif"></Gif>

                <Bubble/>

            </SectionContainer>
            

        </AboutMeContainer>
       
    )
}

export default AboutMe;