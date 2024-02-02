import BadgeAvatars from "../MUI components/avatar";
import '../Mobilecssfiles/mobhero.css'

export default function Mobilehero(){
    return(
        <div className="mainhero">
        <div className="maincont">
        <img src='/src/assets/Invitation icon.svg' alt="Mobile Phone" id="phone"/>
        <div className="mobavtar">
             <BadgeAvatars/>
        </div>
       
        </div></div>
    )
}