import React from "react";
import "./Footer.css";
import { Typography } from "@mui/material";
import {Link} from "react-router-dom";
import { BsGithub, BsLinkedin , BsTwitter } from "react-icons/bs";

const Footer=()=>{
    return ( <div className="footer">
        <div>
            <Typography variant="h5">About Me</Typography>
            <Typography>
                Hey, My name is Soumik Chakrabarty. I am a Full-Stack Developer and trying to learn new things Everyday.
            </Typography>
            <Link to="/contact" className="footerContactBtn">
                <Typography>Contact Us</Typography>
            </Link>
        </div>
        <div>
            <Typography variant="h6">Social Media</Typography>
            <a href="github" target="black">
                <BsGithub />
            </a>
            <a href="Linkedin" target="black">
                <BsLinkedin />
            </a>
            <a href="Twiiter" target="black">
                <BsTwitter />
            </a>
        </div>
    </div>
    );
};
export default Footer;