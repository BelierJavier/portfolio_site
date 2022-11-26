import React from "react";
import './page.css';
import { Flex, Box} from 'rebass';

const Home = () => {
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
	                <h1>
		                Hey 👋🏽 , I'm Belly.
	                </h1>
                    <p className="text">
                        I'm a software developer who enjoys building websites and mobile 
                        apps for independent clients, small, and medium sized businesses. 
                        If you're an individual or growing company trying to establish 
                        your brand on the internet, from online blogs and portfolios to 
                        virtual stores, It'll be my pleasure to bring your services to 
                        the next level.
                    </p>
                </div>
	        </div>

        </Box>
        <Box
        p={3}
        width={1/2}
        color='white'
        bg='primary'>



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