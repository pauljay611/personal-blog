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
            description: 'Use NodeJS and Vue to build a simple blockchain simulate system',
            url: 'https://github.com/pauljay611/blockchain-js',
            date: '2018-6'
        },
        kktalk: {
            description: 'KKBOX hackathon, Use Vue to build a PTT-like discussion platform',
            url: 'https://github.com/pauljay611/kkbox-hackathon-kktalk',
            date: '2019-1'
        },
        painter: {
            description: 'Use Vue and Canvas to build a painter board',
            url: 'https://github.com/pauljay611/canvas-painter-vue',
            date: '2019-2'
        },
        clock: {
            description: 'Use React, canvas, svg to build a clock',
            url: 'https://codepen.io/cifzzpxd/pen/rPKYYL',
            date: '2019-2'
        },
        aqi: {
            description: 'Use Vue to build a AQI search page',
            url: 'https://codepen.io/cifzzpxd/pen/LqyoPo',
            date: '2019-2'
        },
        challenge: {
            description: 'Use React to build a 60 sec counter challenge',
            url: 'https://codepen.io/cifzzpxd/pen/bzPKvo',
            date: '2019-2'
        },
        calculator: {
            description: 'Use React to build a calculator',
            url: 'https://codepen.io/cifzzpxd/pen/NowBRp',
            date: '2019-2'
        },
        chart9x9: {
            description: 'Use React to build a simple 9x9 multiplication chart',
            url: 'https://codepen.io/cifzzpxd/pen/WPZKQZ',
            date: '2019-2'
        },
        worldClock: {
            description: 'Use VanillaJS to build a world clock',
            url: 'https://codepen.io/cifzzpxd/pen/vbmYMQ',
            date: '2019-2'
        },
    }
    const card = props.data.allImageSharp.edges.map((img, key) => {
        const name = img.node.sizes.originalName.split(".png")[0]
        return <ProjectCard key={key}>
            <a href={project[name].url}>
                <Image>
                    <img src={img.node.sizes.src} />
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