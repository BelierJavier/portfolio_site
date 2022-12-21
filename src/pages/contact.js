import React from "react";
import { useState, useRef } from 'react';
import './assets/page.scss';
import './assets/icon.scss';
import { Flex, Box} from 'rebass';
import emailjs from '@emailjs/browser';

//import styled from "styled-components";
//import { useNavigate } from "react-router-dom";


/*
	const ButtonGroup = styled.div`
  	display: flex;
	`
*/

const Contact = () => {

	const [toSend, setToSend] = useState({
		from_name: '',
		message: '',
		reply_to: '',
	  });

	const form = useRef();

    const sendEmail = (event) => {
    	event.preventDefault();
    	
		emailjs.sendForm('service_qy9vg5a', 'template_jjwfo2e', form.current, 'aStxcSan1VyJhQjUQ')
      		.then((result) => {
          		console.log(result.text);
      		}, (error) => {
          		console.log(error.text);
      	});
    }

	const handleChange = (e) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	};

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
				<h1 className="title">Send a message</h1>
                <div className="page-header">
                    <div className="form">
                    <Flex>
						<Box
        					p={3}
       						width={1/2}
        					color='black'
        					bg='primary'>
							
                        <form ref={form} onSubmit={sendEmail}>
							<Flex>
								<Box
        							p={3}
       								width={1/2}
        							bg='primary'
									paddingLeft={0}>

						    		<label for="name" className="contact-label">YOUR NAME</label>
									<input className="contact-input" name='from_name' value={toSend.from_name} onChange={handleChange}></input>

								</Box>
								<Box
        							p={3}
       								width={1/2}
        							bg='primary'
									paddingRight={0}>

									<label for="email" className="contact-label">YOUR EMAIL</label>
									<input className="contact-input" name='reply_to' value={toSend.reply_to} onChange={handleChange}></input>
									

								</Box>
							</Flex>
							<label for="message" className="contact-label">MESSAGE</label>
							<textarea className="contact-input" cols="40" rows="5" name='message' value={toSend.message} onChange={handleChange}></textarea>


							<button className="contact-submit" type="submit">Send</button>
						</form>
     
						</Box>
						<Box
        					p={3}
       						width={1/2}
        					color='white'
        					bg='primary'
							textAlign='left'>

							<div className="content-box">
								<p className="form-text">
                                	Interested in discussing new projects, or just simply want to reach out and get connected?
									Feel free to send me a message and I'll get back to you as soon as possible.
                				</p>
								<div className="mark-holder">
									<p className="form-marks"><span className="marker-icon">📧</span> belierjav@gmail.com</p>
                            		<p className="form-marks"><span className="marker-icon">📞</span> (631) 836-7882</p>
                            		<p className="form-marks"><span className="marker-icon">📍</span> New York, USA</p>
								</div>
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