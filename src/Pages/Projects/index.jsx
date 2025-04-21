import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"

import ImgEncriptador from "../../assets/Img/ecript1.png"
import ImgTicTacToe from "../../assets/Img/tictac.png"
import ImgComming from "../../assets/Img/comming.jpg"
import './projects.css';



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
            <div className={"backdrop-with-text"} text="Click aquí"></div>
            <img className={"image-styled"} src={item.original} alt="Project" placeholder="Click aquí" />
        </Link>
    );

    return(
        <div className="projects-container">
            <p className="projects-description"> 
                Estos son mis proyectos más destacados, hacer click en la imagen para visualizarlo.
            </p>

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
        
        </div>
    )
}

export default Projects;