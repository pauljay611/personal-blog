import React from "react"
import styled from 'styled-components';
import { InfoContent } from "./common"

const ScoreBlock = styled.div`
    display:　flex;
    p {
        flex:1;
    }
`

const SkillBlock = () => (
    <div>
        <h2>
            Professional Skills
        </h2>
        <InfoContent>
            <ScoreBlock>
                <p>Html, CSS, Javascript</p>
                <p>Advanced</p>
            </ScoreBlock>
            <ScoreBlock>
                <p>Vue, Vue router, Vuex</p>
                <p>Advanced</p>
            </ScoreBlock>
            <ScoreBlock>
                <p>React, Redux</p>
                <p>Intermediate</p>
            </ScoreBlock>
            <ScoreBlock>
                <p>PHP, Java</p>
                <p>Intermediate</p>
            </ScoreBlock>
        </InfoContent>
    </div>
)

export default SkillBlock