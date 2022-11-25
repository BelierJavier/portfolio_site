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
		                Prodigy Alpha's home page.
	                </h1>
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