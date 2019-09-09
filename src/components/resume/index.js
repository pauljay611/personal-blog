import React from "react"
import styled from "styled-components"

import PersonInfo from "./personInfo"
import SummaryBlock from "./summaryBlock"
import EducationBlock from "./educationBlock"
import SkillBlock from "./skillBlock"
import EmploymentBlock from "./employmentBlock"
import ProjectBlock from "./projectBlock"

const ResumeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
`

const MainInfo = styled.div`
  padding: 0 21%;
`

const Resume = () => (
  <ResumeContainer>
    <PersonInfo />
    <MainInfo>
      <SummaryBlock />
      <EducationBlock />
      <SkillBlock />
      <EmploymentBlock />
      <ProjectBlock />
    </MainInfo>
  </ResumeContainer>
)

export default Resume
