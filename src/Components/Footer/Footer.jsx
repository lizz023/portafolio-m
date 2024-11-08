
import styled from "styled-components";

const FooterContainer = styled.div`
    background-color: darkslateblue;
   
    padding: 30px;
    text-align: center;
    width: 100%
`

const Footer = () => {
    return (
        <FooterContainer>
        © Copyright Elizabeth Restrepo - 2024
        </FooterContainer>
    )
    
}

export default Footer;