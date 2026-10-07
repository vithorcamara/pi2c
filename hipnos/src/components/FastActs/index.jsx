import { MdNotifications, MdImage, MdEmergency } from "react-icons/md";
import './index.css';
export default function FastActs({icone, desc, bgColor}){
    return(
        <div className="fastacts" style={{ backgroundColor: bgColor }}>
            {icone === 'MdImage' && <MdImage className="icon" />}
            {icone === 'MdNotifications' && <MdNotifications className="icon" />}
            {icone === 'MdEmergency' && <MdEmergency className="icon" />}
            <p className="desc">{desc}</p>
        </div>
    )
}