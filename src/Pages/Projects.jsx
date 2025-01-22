import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"
import ImgTriqui from "../../src/assets/Img/encriptador.png"

const ProjectsContainer = styled.div`
    align-items: center;
    background: #202020;
    color: white;
    display: flex;
    height: 50vh;
    margin: 0 auto;
`
// const ImgProjects = styled.img`
//     width: 100%;
//     padding: 15px;
// `

const Projects = () => {

    const images = [
        {
            original: ImgTriqui, thumbnail:ImgTriqui
            
        },
        {
            original: ImgTriqui, thumbnail:ImgTriqui
        },
        {
            original: ImgTriqui, thumbnail:ImgTriqui
        },
    ];

    return(
        <ProjectsContainer>
            <ImageGallery 
                items={images}
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