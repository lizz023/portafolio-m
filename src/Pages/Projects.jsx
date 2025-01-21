import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"
import ImgTriqui from "../../src/assets/Img/triqui.png"

const ProjectsContainer = styled.div`
    background: #202020;
    color: white;
    width: 50%;
    height: 70vh;
    margin: 0 auto;
`
const ImgProjects = styled.img`
    width: 100px;
`

const Projects = () => {

    const images = [
        {
            original: <ImgProjects src={ImgTriqui}></ImgProjects>
            
        },
        {
            original: "https://picsum.photos/id/1015/1000/600",
            thumbnail: "https://picsum.photos/id/1015/250/150" 
        },
        {
            original: "https://picsum.photos/id/1019/1000/600",
            thumbnail: "https://picsum.photos/id/1019/250/150" 
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