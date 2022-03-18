import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'
import TravelExploreIcon from '@mui/icons-material/TravelExplore'
import InsightsIcon from '@mui/icons-material/Insights';


function Interests() {
    return (
        <div className="skills">
            <h2 className="h2">Centres d'intérêts</h2>
            <ul>
                <li><InsightsIcon style={{ fontSize: 20 }} /><span>Développpement</span></li>
                <li><EmojiObjectsIcon style={{ fontSize: 20 }} /><span>Créativité</span></li>
                <li><TravelExploreIcon style={{ fontSize: 20 }} /><span>Voyage</span></li>
                <li><FitnessCenterIcon style={{ fontSize: 20 }} /><span>Sport</span></li>
            </ul>
            {/* <div className="skills">
                <SportsTennisIcon style={{ fontSize: 40 }} />
                <SportsEsportsIcon style={{ fontSize: 40 }} />
                <CodeIcon style={{ fontSize: 40 }} />
                <DirectionsWalkIcon style={{ fontSize: 40 }} />
                <LocalLibraryIcon style={{ fontSize: 40 }} />
            </div> */}
        </div>
    )
}

export default Interests
