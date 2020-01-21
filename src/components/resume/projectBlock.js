import React from "react"
import { InfoContent, List } from "./common"

const projectBlock = () => (
  <div>
    <h2>Project</h2>
    <InfoContent>
      <h4>Taiwan Stay Hotel Website (Tourism Bureau)</h4>
      <p>June 2019 – August 2019</p>
    </InfoContent>
    <List>
      <li>Develop Hotel website in Laravel</li>
    </List>
    <InfoContent>
      <h4>Crowdfunding website</h4>
      <p>November 2018 – December 2018</p>
    </InfoContent>
    <List>
      <li>Develop chatroom features in Nuxt.js and Firebase</li>
      <li>Develop comment features in Nuxt.js</li>
    </List>
    <InfoContent>
      <h4>Receipt Monster</h4>
      <p>December 2017 – March 2018</p>
    </InfoContent>
    <List>
      <li>Develop text recognition in receipts with Google Cloud Vision</li>
      <li>Develop the app with Android Studio</li>
    </List>
  </div>
)

export default projectBlock
