import React from "react";
import './assets/page.css';
import './assets/icon.css';
import Resume from'./assets/BelierJ_Resume.pdf'
import { Flex, Box} from 'rebass';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const ButtonGroup = styled.div`
  display: flex;
`

const DownloadResume = () => {
    
    fetch(Resume).then(response => {
        response.blob().then(file => {
            const fileURL = window.URL.createObjectURL(file);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = "Belier's_Resume";
            alink.click();
            
        })
    })
}

const Home = () => {

const focusIn = () => {

    document.getElementById("float").style.opacity = .4;
    document.getElementById("float").style.filter = "blur(2px)";

}

const focusOut = () => {

    document.getElementById("float").style.opacity = 1;
    document.getElementById("float").style.filter = "blur(0)";

}

const navigate = useNavigate();

return (
    <Flex>
        <Box
        p={3}
        width={1/16}
        color='white'
        bg='primary'/>
        <Box
        p={3}
        width={1/2}
        color='white'
        bg='primary'>

	        <div className="page">
                <div className="page-header">
                    <div className="floater" id="float">
                        <div className="content-box">
	                        <h1 className="title">
		                        Hey <span className="wave">👋🏽</span> , I'm Belly.
	                        </h1>
                        </div>
                        <div className="content-box">
                            <p className="text">
                                Passionate software developer who enjoys building websites and mobile 
                                apps for independent clients, small, and medium sized businesses. 
                                If you're an individual or growing company trying to establish 
                                your brand on the internet, from online blogs and portfolios to 
                                virtual stores, It'll be my pleasure to bring your services to 
                                the next level.
                            </p>
                        </div>
                        <ButtonGroup>

                            <button className="home-button2 effect" onClick={DownloadResume}> Download CVV </button>
                            <button className="home-button1 effect" onClick={() => navigate("/contact")}> Contact </button>

                        </ButtonGroup>
                        <ButtonGroup>
                        
                            <button className="smicon gh" onClick={() => window.open("http://github.com/BelierJavier")}></button>
                            <button className="smicon ig" onClick={() => window.open("https://www.instagram.com/prodigy.alpha")}></button>
                            <button className="smicon li" onClick={() => window.open("https://www.linkedin.com/in/belier-javier-7616401b6/")}></button>
                            <button className="smicon uw" onClick={() => window.open("https://www.upwork.com/freelancers/~017604c150247caa9f")}></button>

                        </ButtonGroup>
                    </div>
                </div>
	        </div>

        </Box>
        <Box
        p={3}
        width={1/2}
        color='white'
        bg='primary'>

        <div className="page">
            <div className="page-header">
                <img 
                    className="profile" 
                    src="Official_Profile_Cutout2.png" 
                    alt="profile"
                    onMouseEnter={focusIn}
                    onMouseLeave={focusOut}
                />
            </div>
        </div>

        </Box>
        <Box
        p={3}
        width={1/16}
        color='white'
        bg='primary'/>
    </Flex>
);
};

export default Home;