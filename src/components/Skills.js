import "./Skills.css"
import Skill from "./Skill"
import Interests from "./Interests"
import styled from 'styled-components'


const SkillsBox = styled.div`
    margin-top: 2em;
`


function Skills() {

    return (
        <SkillsBox>
            <div className="skills">
                <h2 className="h2">Compétences Frontend</h2>
                <p className="skill__label">HTML / CSS</p>
                <p className="skill__label">JAVASCRIPT</p>
                <p className="skill__label">REACT</p>
                <p className="skill__label">REDUX</p>
                <h2 className="h2">Compétences Backend</h2>
                <p className="skill__label">MONGO DB</p>
                <p className="skill__label">EXPRESS</p>
                <p className="skill__label">NODE JS</p>
                
                {/* <h2 className="h2">Compétences</h2> */}
                {/* <Skill title="HTML" rating="5" />
                <Skill title="CSS" rating="4" /> */}
                {/* <Skill title="JAVASCRIPT" rating="4" />
                <Skill title="REACT, REDUX" rating="4" />
                <Skill title="EXPRESS" rating="3" />
                <Skill title="NODE" rating="3" /> */}
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
