import React from "react"
import styled from 'styled-components';

const Name = styled.h1`
    text-align: center;
    font-size: 3em;
    line-height: 3em;
`
const ContactInfo = styled.div`
    p {
        text-align: center;
        font-size: 1.2em;
        line-height: 1.2em;
    }
`

const IconUrl = styled.div`
    display: flex;
    justify-content: center;
    a {
        margin: 0 1%;
    }
    .blue {
        color: #0077B5
    }
    .black {
        color: #000
    }
`


const PersonInfo = () => (
    <div>
        <Name> Paul Yang </Name>
        <ContactInfo>
            <p>Taipei, Taiwan</p>
            <p>pauljay611@gmail.com</p>
            <IconUrl>
                <a href="https://github.com/pauljay611/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-2x fa-github black"></i>
                </a>
                <a href="https://medium.com/@paulyang1234" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-2x fa-medium black"></i>
                </a>
                <a href="https://www.linkedin.com/in/paul-yang-02b474153/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-2x fa-linkedin black"></i>
                </a>
            </IconUrl>
        </ContactInfo>
    </div>

)

export default PersonInfo