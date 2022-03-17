import "./User.css"
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from "@mui/icons-material/Phone"
import MailIcon from "@mui/icons-material/Mail"
import EventIcon from "@mui/icons-material/Event"
import LocationOnIcon from "@mui/icons-material/LocationOn"


function User({ nom }) {

    return (
        <div className="user">
            <img src="./images/avatar.jpg" className="user__avatar" alt="Nicolas Pedenau" />
            <h1 className="user__name">{nom}</h1>
            <p className="user__profession">Développeur Web</p>
            <div className="user__infos">
                <p className="user__info">
                    <HomeIcon /> 31 Boulevard de l'ancien Marché 13870 Rognonas
                </p>
                <p className="user__info">
                    <PhoneIcon /> <a href="tel:+33606060606">0749646931</a>
                </p>
                <p className="user__info">
                    <MailIcon /> <a href="mailto:johndoe@gmail.com">nicolas.pedenau@hotmail.fr</a>
                </p>
                <p className="user__info">
                    <EventIcon /> Date de naissance: 5 Avril 1984
                </p>
                <p className="user__info">
                    <LocationOnIcon /> Lieu de naissance: Champigny-sur-Marne
                </p>
            </div>
        </div>
    )
}

export default User
