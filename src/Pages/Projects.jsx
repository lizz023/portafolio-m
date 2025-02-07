import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"
import ImgEncriptador from "../../src/assets/Img/encriptador.png"
import ImgTicTacToe from "../../src/assets/Img/tictactoe.png"
import ImgComming from "../../src/assets/Img/comming.jpg"
import { Link } from "react-router-dom";

const ProjectsContainer = styled.div`
    align-items: center;
    background: #202020;
    color: white;
    display: flex;
    height: 100vh;
    margin: 0 auto;
`
// const ImgProjects = styled.img`
//     width: 100%;
//     padding: 15px;
//     img:rec
// `

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
        <Link to={item.link} style={{ display: "block" }} target="blank">
          <img 
            src={item.original} 
            alt="Project" 
            style={{ width: "100%", height: "auto", borderRadius: "10px" }}
          />
        </Link>
    );

    return(
        <ProjectsContainer>
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
            />
        </ProjectsContainer>
    )
}

export default Projects;