import BadgeAvatars from "../MUI components/avatar";
import '../Mobilecssfiles/mobhero.css'
import Mobile from '/src/assets/Invitation icon.svg'

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