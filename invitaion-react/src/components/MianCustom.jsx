import { Customizsec } from "./Customisesec";
import HorizontalTabs from "./MUI components/customisehtabs";
import BadgeAvatars from "./avatar";
import './css files/custom.css'

export function MainCustom(){
    return(
        <div className="mcustommian">
            <div className="mcustomcont">
                <img src="/src/assets/react.svg" alt="" className="logo" />
                <p className="invitaionnation">Invitaion Nation</p>
                <div className="cusavtar"><BadgeAvatars/></div>
            </div>
            <div className="customizesecpart">
                
            </div> <HorizontalTabs/>
           
           
        </div>
    )
}