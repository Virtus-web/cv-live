import "./Skills.css"
import Skill from "./Skill"
import Interests from "./Interests"
import styled from 'styled-components'


const SkillsBox = styled.div`
    margin-top: 4.5em;
`


function Skills() {

    return (
        <SkillsBox>
            <div className="skills">
                <h2 className="h2">Compétences</h2>
                <Skill title="HTML" rating="5" />
                <Skill title="CSS" rating="4" />
                <Skill title="JAVASCRIPT" rating="4" />
                <Skill title="REACT, REDUX" rating="4" />
                <Skill title="EXPRESS" rating="3" />
                <Skill title="NODE" rating="3" />
            </div>
            <div className="skills">
                <h2 className="h2">Langues</h2>
                <Skill title="Anglais" rating="5" />
                <Skill title="Brésilien" rating="2" />
            </div>
            <Interests />
        </SkillsBox>
    )
}

export default Skills
