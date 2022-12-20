import React from "react";
import './assets/page.scss';
import './assets/icon.scss';
import { Flex, Box} from 'rebass';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const ButtonGroup = styled.div`
  display: flex;
`

const Contact = () => {

return (
    <Flex>
        <Box
        p={3}
        width={1/16}
        color='white'
        bg='primary'/>
        <Box
        p={3}
        width={1}
        color='white'
        bg='primary'>

            <div className="page">
				<h1 className="title">Reach out!</h1>
                <div className="page-header">
                    <div className="form">
                    <Flex>
						<Box
        					p={3}
       						width={1/2}
        					color='black'
        					bg='primary'>
							
                        <form>
							<Flex>
								<Box
        							p={3}
       								width={1/2}
        							bg='primary'
									paddingLeft={0}>

						    		<label for="name" className="contact-label">YOUR NAME</label>
									<input className="contact-input"></input>

								</Box>
								<Box
        							p={3}
       								width={1/2}
        							bg='primary'
									paddingRight={0}>

									<label for="email" className="contact-label">YOUR EMAIL</label>
									<input className="contact-input"></input>

								</Box>
							</Flex>
							<label for="message" className="contact-label">MESSAGE</label>
							<textarea className="contact-input" cols="40" rows="5"></textarea>
							<input className="contact-submit" type="submit" value="Submit"></input>
						</form>
     
						</Box>
						<Box
        					p={3}
       						width={1/2}
        					color='white'
        					bg='primary'>

							<div className="content-box">
                            	<p className="form-text">
                                	Passionate software developer who enjoys building websites and mobile 
                                	apps for independent clients, small, and medium sized businesses. 
                                	If you're an individual or growing company trying to establish 
                                	your brand on the internet, from online blogs and portfolios to 
                                	virtual stores, It'll be my pleasure to bring your services to 
                                	the next level.
                            	</p>
                        	</div>

						</Box>
					</Flex>
                    </div>
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

export default Contact;