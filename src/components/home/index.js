import React from "react"
import styled from 'styled-components';

const Separate = styled.div`
    display: flex;
    justify-content: center;
`

const Line = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;    
    .word {
        line-height: 40px;
        margin: 0 5px;
    }
    .line {
        width: 30%;
        display: flex;
        align-items: center;
        p {
            width: 100%;
            height: 1px;
            border-bottom: 1px solid #000;
            margin: 0;
        }
    } 
`

const Content = styled.div`
    display: flex;
    height: 450px;
`

const Photo = styled.div`
    flex: 1;
    img {
        width: 100%;
        border-radius: 3px;
    }
`

const Intro = styled.div`
    flex: 1;
    padding: 0 20px;
    h3 {
        margin: 0;
    }
`

const home = () => (
    <div>
        <h1 style={{ 'textAlign': 'center', marginBottom: '0' }}>About me</h1>
        <Separate>
            <Line>
                <div className="line"><p></p></div>
                <p className="word">X</p>
                <div className="line"><p></p></div>
            </Line>
        </Separate>
        <div style={{ 'display': 'flex', 'justifyContent': 'center' }}>
            <p>Web Developer ． Taiwan ． 1994</p>
        </div>
        <Content>
            <Photo>
                <img src="profile.jpg" />
            </Photo>
            <Intro>
                <h3>Introduction</h3>
                <br />
                <p>Hi, I'm Paul. Living in Taipei and seeking for a front-end developer job now.
                    Familiar with Javascript and front-end development in 2 years related experience.
                    <br /><br />If you are interested in me, &nbsp;please feel free to contact me on Linkedin or Email.
                </p>
                <h3>Skills</h3>
                <br />
                <p>Frontend: Vue.js, &nbsp;React.js, &nbsp;SCSS <br />
                    Backend: Express.js, &nbsp;Laravel
                </p>
                <p>
                    Email: pauljay611@gmail.com<br />
                    Linkedin: <a href="https://www.linkedin.com/in/paul-yang-02b474153/">Paul Yang</a>
                </p>
            </Intro>
        </Content>
    </div>
)

export default home