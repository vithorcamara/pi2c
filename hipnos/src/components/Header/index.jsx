import { MdLocationPin, MdNotifications, MdSettings } from "react-icons/md";
import './index.css';
export default function Header(){
    return(
        <>
            <header>
                <div className="column">
                    <div className="welcome">
                        <p onClick={()=>{window.location.href = '/perfil';}}>Bom dia, </p>
                        <strong>Ana</strong>
                    </div>
                    <p className="loc"><MdLocationPin /> Recife, PE</p>
                </div>
                <div className="column">
                    <MdNotifications className="icon-header" />
                    <MdSettings className="icon-header" />
                </div>
            </header>
        </>
    )
}