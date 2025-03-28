import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"
import ImgEncriptador from "../../src/assets/Img/ecript1.png"
import ImgTicTacToe from "../../src/assets/Img/tictac.png"
import ImgComming from "../../src/assets/Img/comming.jpg"
import { Link } from "react-router-dom";

const ProjectsContainer = styled.div`
    align-items: center;
    
    color: white;
    display: flex;
    height: 100vh;
    margin: 0 auto;
    padding: 20px;
`
const DescriptionProject = styled.p`
    color: black;
    display: flex;
    font-size: 24px;
    text-align: justify;
    width: 30%;
`

const StyledImage = styled.img`
  width: 400px; /* Ajusta según tus necesidades */
  height: 300px;
  object-fit: cover; /* Ajusta la imagen sin deformarla */
  border-radius: 10px;
  transition: box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out;

  /* &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
    background-color: red;
  } */
`
const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left:0;
    width:100%;
    height:100%;
    background-color: rgba(0,0,0,0);
    transition: 0.3s;

    &:hover{
        background-color: rgba(0, 0, 0, 0.5);
    }
`

const Projects = () => {

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
        <Link to={item.link} style={{ display: "block", position: "relative" }} target="blank">
            <Backdrop />
            <StyledImage  src={item.original} alt="Project"/>
        </Link>
    );

    return(
        <ProjectsContainer>
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
                thumbnailPosition="bottom"
                autoPlay={true}
                thumbnailPosition={"left"}
            />
        </ProjectsContainer>
    )
}

export default Projects;