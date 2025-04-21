
import { styled } from "styled-components";
import Transition from "../../assets/Img/transition.gif";
import Bubble from "../../Components/Bubble";


const AboutMeContainer = styled.section`
    background-color: cadetblue;

`
const SectionContainer = styled.div`
    align-items: center;
    align-content: center;
    display: flex;
    min-height: 100dvh;
    max-width: 1136px;
    
    @media (max-width:768px) {
        /* flex-direction: column; */
        flex-wrap: wrap;
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
        font-size: 24px;
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
                    
                Soy tecnóloga en Producción Industrial, y en 2022 decidí iniciar una nueva etapa profesional en el desarrollo de software. Fue un cambio impulsado por curiosidad, motivación personal y el deseo de construir un futuro diferente para mí y mi familia.

                Desde entonces he aprendido de forma autodidacta tecnologías como HTML, CSS, JavaScript, React, Node.js y SQL, y actualmente estoy cursando una carrera en desarrollo de software para reforzar mis bases técnicas. Me gusta crear soluciones web funcionales, cuidar los detalles, y seguir aprendiendo todos los días.

                Busco crecer como desarrolladora, formar parte de equipos donde se valore el aprendizaje constante y aportar con compromiso, dedicación y muchas ganas.
                </Paragraph>

                <Gif src={Transition} alt="Gif"></Gif>

                <Bubble/>

            </SectionContainer>
            

        </AboutMeContainer>
       
    )
}

export default AboutMe;