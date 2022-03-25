import "./User.css"
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from "@mui/icons-material/Phone"
import MailIcon from "@mui/icons-material/Mail"
import Avatar from '../assets/avatar.jpg'
// import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import EventIcon from "@mui/icons-material/Event"
// import LocationOnIcon from "@mui/icons-material/LocationOn"


function User({ nom }) {

    return (
        <div className="user">
            <img src={Avatar} className="user__avatar" alt="Nicolas Pedenau" />
            <h1 className="user__name">{nom}</h1>
            <p className="user__profession">Développeur Web - Fullstack</p>
            <div className="user__infos">
                <p className="user__info">
                    <HomeIcon /> 31 Boulevard de l'ancien Marché 13870 Rognonas
                </p>
                <p className="user__info">
                    <PhoneIcon /> <a href="tel:+33749646931">0749646931</a>
                </p>
                <p className="user__info">
                    <MailIcon /> <a href="mailto:johndoe@gmail.com">nicolas.pedenau@hotmail.fr</a>
                </p>
                {/* <p className="user__info">
                    <GitHubIcon /> <a href="https://github.com/Virtus-web" rel="noreferrer" target="_blank">Virtus-web</a>
                </p> */}
                <p className="user__info">
                    <LinkedInIcon /> <a href="https://www.linkedin.com/in/nicolas-pedenau/" rel="noreferrer" target="_blank">Page Linked'In</a>
                </p>
                {/* <p className="user__info">
                    <EventIcon /> Date de naissance: 5 Avril 1984
                </p> */}
                {/* <p className="user__info">
                    <LocationOnIcon /> Lieu de naissance: Champigny-sur-Marne
                </p> */}
            </div>
        </div>
    )
}

export default User
