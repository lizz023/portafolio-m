import React from "react";
import styled from "styled-components";
import Photo from "../../assets/Img/lizz.png"
import Linkedin from "../../assets/Img/linkedin.png"
import Github from "../../assets/Img/github.png"
import Bubble from "../Bubble";


const BannerContainer = styled.section`
    background: linear-gradient(to right, #005C98, #505BDA);
`
const BannerBox = styled.div`
    align-items: center;
    display: flex;
    max-width: 1136px;
    justify-content: space-between;
    height: 100vh;
    padding: 20px 40px;

    @media( max-width: 768px){
        flex-direction:column
    }
`
const BannerTitle = styled.div`
    color: #fff;
    margin: 0;
`
const BannerTitleH2 = styled.h2`
    font-size: 30px;
    font-weight: 800;
    text-align: center;

    @media (min-width: 1136px){
        font-size: 60px;
    }
`

const BannerP = styled.p`
    background: #1A2849;
    display: inline-block;
    font-size: 20px;
    padding: 20px;
`
const BannerImg = styled.div`
    margin: initial;
    animation: movimiento 2.5s linear infinite;

    @keyframes movimiento {
        0%{
            transform: translateY(0);
        }
        50%{
            transform: translateY(30px);
        }
        100%{
            transform: translateY(0);
        }
    }
`
const PhotoLiz = styled.img`
    align-items: center;
    border-radius: 50%;
    display: flex;
    height: 220px;
    justify-content: center;
    margin: 20px auto;
    overflow: hidden;
    width: 220px;
`

const IconsBanner = styled.img`
    width: 50px;
`

const Icons = styled.a`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0;
`
const IconsContainer = styled.div`
    display: flex;
    gap: 20px;
    padding: 13px 0;
`

const Banner = () => {
    return(
        <BannerContainer>

            <BannerBox>

                <BannerTitle>
                    <BannerTitleH2>
                        Hey! I'm Elizabeth Restrepo
                    </BannerTitleH2>
                    
                <BannerP to={"/"}>
                        Front End Developer Junior - Medellín-Colombia
                </BannerP>

                <IconsContainer>
                        <Icons href={"https://www.linkedin.com/in/elizabeth-restrepo-256541158/"}target={"_blank"}>
                            <IconsBanner src={Linkedin}></IconsBanner> Linkedin
                        </Icons>

                        <Icons href={"https://github.com/lizz023"}target={"_blank"}>
                            <IconsBanner src={Github}></IconsBanner> GitHub
                        </Icons>

                </IconsContainer>

                </BannerTitle>
            
                <BannerImg>
                    <PhotoLiz src={Photo} alt="Photo"></PhotoLiz>
                </BannerImg>

            </BannerBox>
          
            <Bubble/>

        </BannerContainer>
    )
}

export default Banner;