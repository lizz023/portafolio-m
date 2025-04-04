import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"
import ImgEncriptador from "../../src/assets/Img/ecript1.png"
import ImgTicTacToe from "../../src/assets/Img/tictac.png"
import ImgComming from "../../src/assets/Img/comming.jpg"
import { Link } from "react-router-dom";
import './Projects.css';
import { useState, useEffect } from "react";

const DescriptionProject = styled.p`
    color: black;
    display: flex;
    font-size: 20px;
    flex-direction: row;
    text-align: justify;
`

const StyledImage = styled.img`
  border-radius: 10px;
  height: 400px;
  object-fit: cover;
  transition: box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out;
  width: 550px; 
  
  @media(max-width: 768px){
    width: 350px;
    height: 300px;
    padding: 20px
  }
`
const BackdropWithText = styled.div`
    background-color: rgba(0,0,0,0);
    height:100%;
    left:0;
    position: absolute;
    transition: 0.3s;
    top: 0;
    width:100%;
    
    &:before{
        content: "${props => props.text}";
        position: absolute;
        z-index: 1;
        left:50%;
        top:50%;
        transform: translate(-50%, -50%);
        font-size: 36px;
        opacity: 0;
        transition: 0.3s;
    }
   
    &:hover{
        background-color: rgba(0, 0, 0, 0.5);
        &:before{
            opacity:1;
        }
    }
`

const Projects = () => {

    const [thumbnailPosition, setThumbnailPosition] = useState("left");

    useEffect(() => {
        const updateThumbnailPosition = () => {
            if (window.innerWidth <= 768) {
                setThumbnailPosition("bottom");
            } else {
                setThumbnailPosition("left");
            }
        };

        updateThumbnailPosition(); // Ajusta la posición al cargar la página
        window.addEventListener("resize", updateThumbnailPosition);

        return () => window.removeEventListener("resize", updateThumbnailPosition);
    }, []);

    const images = [
        {
            original: ImgEncriptador, 
            thumbnail:ImgEncriptador,
            link: "https://lizz023.github.io/challenge/"
        },
        {
            original: ImgTicTacToe, 
            thumbnail:ImgTicTacToe,
            link: "https://lizz023.github.io/triquiliz/"
        },
        {
            original: ImgComming, 
            thumbnail:ImgComming,
        },
    ];

    const renderItem = (item) => (
        <Link to={item.link} style={{ display: "block", position: "relative" }} target="blank" >
            <BackdropWithText text="Click aquí"/>
            <StyledImage  src={item.original} alt="Project" placeholder="Click aquí"/>
        </Link>
    );

    return(
        <div className="projects-container">
        {/*<ProjectsContainer>*/}
            <DescriptionProject>
                Estos son mis proyectos más destacados, hacer click en la imagen para visualizarlo.
            </DescriptionProject>

            <ImageGallery 
                items={images}
                renderItem={renderItem}
                showFullscreenButton={false}
                showBullets={true}
                showPlayButton={false}
                showThumbnails={true}
                showNav={false}
                autoPlay={true}
                thumbnailPosition={thumbnailPosition}
            />
        {/* </ProjectsContainer> */}
        </div>
    )
}

export default Projects;