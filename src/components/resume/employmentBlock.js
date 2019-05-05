import React from "react"
import { InfoContent, TimeBlock, List } from "./common"

const employmentBlock = () => (
    <div>
        <h2>
            Employment History
        </h2>
        <InfoContent>
            <h4>StarLordTech</h4>
            <TimeBlock>
                <p>Front-end Developer</p>
                <p>February 2019 - Present</p>
            </TimeBlock>
        </InfoContent>
        <List>
            <li>Develop game platform in Vue.js and Typescript</li>
            <li>Develop game platform back office in Vue.js and Typescript</li>
        </List>
        <InfoContent>
            <h4>Tokenbacon</h4>
            <TimeBlock>
                <p>Front-end Developer</p>
                <p>January 2018 - November 2018</p>
            </TimeBlock>
        </InfoContent>
        <List>
            <li>Develop event page in Vue.js </li>
            <li>Develop official website in Laravel framwork</li>
            <li>Develop Line bot in node.js</li>
            <li>Maintain and manage Google Cloud Server</li>
        </List>
    </div>
)

export default employmentBlock