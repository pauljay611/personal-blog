import React from "react"
import styled from 'styled-components';

const ProjectBlock = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 100%;
`

const ProjectCard = styled.div`
    width: 250px;
    height: 400px;
    border-radius: 3px;
    border: 1px solid #E7E7E7;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
    padding: 10px;
    margin: 20px 0;
    margin-right: 20px;
    a {
        color: #000;
    }
`


const Image = styled.div`
    width: 100%;
    height: 50%;
    margin-bottom: 10px;
    img {
        width: 100%;
        height: 100%;
    }
`

const Intro = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-flow: column nowrap;
    overflow: hidden;
    p {
        flex: 4;
        margin: 0;
        overflow: hidden;
    }
    h4 {
        flex: 1;
        margin: 0;
        overflow: hidden;
    }
    .date {
        flex: 1;
        text-align: right;
    }
`


const Portfolio = (props) => {
    const project = {
        blockjs: {
            description: 'Using NodeJS and Vue to build a simple blockchain simulated system',
            url: 'https://github.com/pauljay611/blockchain-js',
            date: '2018-6'
        },
        kktalk: {
            description: 'KKBOX hackathon, using Vue.js to build a PTT-like forum',
            url: 'https://github.com/pauljay611/kkbox-hackathon-kktalk',
            date: '2019-1'
        },
        painter: {
            description: 'Using Vue and Canvas to build a painter board',
            url: 'https://github.com/pauljay611/canvas-painter-vue',
            date: '2019-2'
        },
        clock: {
            description: 'Using React.js, canvas, and svg to build a clock',
            url: 'https://codepen.io/cifzzpxd/pen/rPKYYL',
            date: '2019-2'
        },
        aqi: {
            description: 'Using Vue.js to build a AQI search page',
            url: 'https://codepen.io/cifzzpxd/pen/LqyoPo',
            date: '2019-2'
        },
        challenge: {
            description: 'Using React.js to build a 60 sec counter challenge',
            url: 'https://codepen.io/cifzzpxd/pen/bzPKvo',
            date: '2019-2'
        },
        calculator: {
            description: 'Using React.js to build a calculator',
            url: 'https://codepen.io/cifzzpxd/pen/NowBRp',
            date: '2019-2'
        },
        chart9x9: {
            description: 'Using React.js to build a simple 9x9 multiplication chart',
            url: 'https://codepen.io/cifzzpxd/pen/WPZKQZ',
            date: '2019-2'
        },
        worldClock: {
            description: 'Using Vanilla Javascript to build a world clock',
            url: 'https://codepen.io/cifzzpxd/pen/vbmYMQ',
            date: '2019-2'
        },
    }
    const card = props.data.allImageSharp.edges.map((img, key) => {
        const name = img.node.sizes.originalName.split(".png")[0]
        return <ProjectCard key={key}>
            <a href={project[name].url}>
                <Image>
                    <img src={img.node.sizes.src} alt="no image" />
                </Image>
                <Intro>
                    <h4>{name}</h4>
                    <p>{project[name].description}</p>
                    <p className="date">{project[name].date}</p>
                </Intro>
            </a>
        </ProjectCard>
    })
    return (
        <div>
            <h1>Portfolio</h1>
            <ProjectBlock>

                {card}
            </ProjectBlock>
        </div>
    )
}

export default Portfolio