import React from "react"
import { InfoContent, TimeBlock, List } from "./common"

const employmentBlock = () => (
  <div>
    <h2>Employment History</h2>
    <InfoContent>
      <h4>17 Media</h4>
      <TimeBlock>
        <p>Front-end Develope</p>
        <p>December 2019 - Present</p>
      </TimeBlock>
    </InfoContent>
    <List>
      <li>Develop event tool and custom event</li>
    </List>
    <InfoContent>
      <h4>Alpha Camp</h4>
      <TimeBlock>
        <p>Teacher Asistant</p>
        <p>September 2019 - Present</p>
      </TimeBlock>
    </InfoContent>
    <List>
      <li>Answer student's questions and give feedback</li>
    </List>
    <InfoContent>
      <h4>StarLordTech</h4>
      <TimeBlock>
        <p>Front-end Developer</p>
        <p>February 2019 - July 2019</p>
      </TimeBlock>
    </InfoContent>
    <List>
      <li>Develop game platform and back office in Vue.js and Typescript</li>
    </List>
    <InfoContent>
      <h4>Tokenbacon</h4>
      <TimeBlock>
        <p>Front-end Developer</p>
        <p>January 2018 - November 2018</p>
      </TimeBlock>
    </InfoContent>
    <List>
      <li>Develop event page in Vue.js and Express.js</li>
      <li>Develop official website in Laravel framwork</li>
    </List>
  </div>
)

export default employmentBlock
