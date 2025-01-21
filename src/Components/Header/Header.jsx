
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../../assets/Img/LizDev.png"
import Banner from "../Banner";
import Bubble from "../Bubble";


const HeaderContainer = styled.header`
    /* background: linear-gradient(to right, #005C98, #505BDA);
    height: 100vh;
    overflow: hidden;
    position: relative;
    width: 100%; */
    background: darkslateblue;
`

const NavContainer = styled.nav`
    align-items: center;
    display: flex;
    font-size: 20px;
    gap: 30px;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1136px;
    padding: 20px;

    @media (min-width: 768px){
        gap: 20px;
        padding: 10px 40px;
    }
`
const LogoDev = styled.img`
    width: 55px;

    /* @media (min-width: 768px){
        width: 61px;
    } */
`
const NavLinks = styled.div`
    color: #fff;
    display: flex;
    gap: 10px;
    margin: 0;
    font-size: 17px;

    @media (min-width: 1136px){
        font-size: 24px;
        gap: 20px;

    }

`
const Linkdev = styled.div`
    margin: 0;
`
const Header = () => {
    return(
        <HeaderContainer>

            <NavContainer>
                <Linkdev>
                    <Link to={"/"}>
                        <LogoDev src={Logo}></LogoDev>
                    </Link>
                </Linkdev>
               
                <NavLinks>
                    <Link to={"/aboutMe"}>About Me</Link>
                    <Link to={"/skills"}>Skills</Link>
                    <Link to={"/projects"}>Projects</Link>
                    <Link to={"/"}>Contact</Link>
                </NavLinks>

            </NavContainer>

            {/* <Bubble/> */}
        </HeaderContainer>
    )

}

export default Header;