import BadgeAvatars from "../MUI components/avatar";
import './mobhero.css'
import Mobile from '../../User-Dashboard/assets copy/Invitation icon.svg'

export default function Mobilehero(){
    return(
        <div className="mainhero">
        <div className="maincont">
        <img src={Mobile} alt="Mobile Phone" id="phone"/>
        <div className="mobavtar">
             <BadgeAvatars/>
        </div>
       
        </div></div>
    )
}