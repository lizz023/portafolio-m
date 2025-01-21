
import { Link } from 'react-router-dom'
import {styled} from 'styled-components'
import imgCss from '../../src/assets/Img/css.png'
import imgHtml from '../../src/assets/Img/html.png'
import imgJs from '../../src/assets/Img/js.png'
import imgReact from '../../src/assets/Img/react.png'
import imgNode from '../../src/assets/Img/node.png'
import imgFigma from '../../src/assets/Img/figma.png'
import imgPython from '../../src/assets/Img/python-5.svg'
import imgGit from '../../src/assets/Img/git.svg'
import imgGithub from '../../src/assets/Img/github.png'
import imgMysql from '../../src/assets/Img/mysql.png'

const SkillSection = styled.section`
    align-items: center;
    background-color: white;
    display: flex;
    max-width: 1136px;
 

    @media screen {
        /* height: 71vh; */
    }
`
const SkillContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 50px;
    max-width: 1136px;
    padding: 40px 0 ;
    
`
const SkillTittle = styled.h1`
    color: purple;
    font-size: 32px;
`

const Description = styled.p`
    color: black;
    font-size: 24px;
    text-align: center;
    
    @media screen {
      
    }
`
const SkillLinks = styled.div`

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    transition: 0.3s;
    gap: 50px;
    padding: 20px 40px;
    /* grid-auto-rows: minmax(100px, auto); */
    :hover{
        transform: scale(1.1) ;
    }
   
    @media(min-width: 768px) {
        grid-template-columns: repeat(5, 1fr);
    }
`

const SkillImg = styled.img`
    display: flex;
    padding: 15px;
    width: 100%;
`
const Skills = () => {
    return (
        <SkillSection>
                <SkillContainer>
                    <SkillTittle>
                        Skills
                    </SkillTittle>

                    <Description>
                        Hacer click en la imagen para ver el certificado.
                    </Description>

                    <SkillLinks>
                        <Link 
                            to={"https://app.aluracursos.com/degree/certificate/e9a3465f-950a-425d-83c7-56bc2ff7bd47"} target='blank'>
                                <SkillImg src={imgHtml}></SkillImg>
                        </Link>
                        
                        <Link 
                            to={"https://app.aluracursos.com/degree/certificate/e9a3465f-950a-425d-83c7-56bc2ff7bd47"}>
                            <SkillImg src={imgCss}></SkillImg>
                        </Link>

                        <Link 
                            to={"https://app.aluracursos.com/certificate/8bfc253b-fda3-4a91-aa32-66b5fcaa26e5"} target='blank'><SkillImg src={imgJs}></SkillImg>
                        </Link>

                        <Link  
                            to={"https://app.aluracursos.com/degree/certificate/9ea2efab-abad-4ec2-8722-45670b2003f1"} target='blank'>
                            <SkillImg src={imgReact}></SkillImg>
                        </Link>
                        <Link 
                            to={"https://udemy-certificate.s3.amazonaws.com/pdf/UC-7a622cfa-ea30-443e-984a-6cb399bb7736.pdf"} target='blank'>
                            <SkillImg src={imgNode}></SkillImg>
                        </Link>

                        <Link 
                            to={"https://app.aluracursos.com/certificate/b08f98b7-c79a-4b43-8970-2af556befc64"} target='blank'>
                            <SkillImg src={imgPython}></SkillImg>
                        </Link>

                        <Link 
                            to={"https://app.aluracursos.com/certificate/c7b4096a-dee6-451f-ac35-326a4eb4d08f"} target='blank'>
                            <SkillImg src={imgGit}></SkillImg>
                        </Link>

                        <Link 
                            to={"https://app.aluracursos.com/certificate/c7b4096a-dee6-451f-ac35-326a4eb4d08f"} target='blank'>
                            <SkillImg src={imgGithub}></SkillImg>
                        </Link>
                        
                        <Link 
                            to={"/"} target='blank'>
                            <SkillImg src={imgMysql}></SkillImg>
                        </Link>

                        <Link to={"/"}><SkillImg src={imgFigma}></SkillImg></Link>
                        
                    </SkillLinks>

                </SkillContainer>
        </SkillSection>
    )
}
export default Skills;