import React from "react"
import { InfoContent, List } from "./common"

const employmentBlock = () => (
    <div>
        <h2>
            Project
                </h2>
        <InfoContent>
            <h4>Crowdfunding website</h4>
            <p>November 2018  –  December 2018</p>
        </InfoContent>
        <List>
            <li>Develop chatroom features in Nuxt.js and Firebase</li>
            <li>Develop comment features in Nuxt.js</li>
        </List>
        <InfoContent>
            <h4>Hackidb startup competition</h4>
            <p>June 2018  –  October 2018</p>
        </InfoContent>
        <List>
            <li>Develop Image Recognition features with Google Cloud Vision to recognize merchandise</li>
            <li>Develop social network  with firebase to build the database in recognition</li>
        </List>
        <InfoContent>
            <h4>Receipt Monster</h4>
            <p>December 2017  –  March 2018</p>
        </InfoContent>
        <List>
            <li>Develop text recognition in receipts with Google Cloud Vision</li>
            <li>Develop the app with Android Studio</li>
        </List>
    </div>
)

export default employmentBlock