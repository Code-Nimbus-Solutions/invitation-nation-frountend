
import HorizontalTabs from "../../MUI components/customisehtabs";
import BadgeAvatars from "../../MUI components/avatar";
import './custom.css'
import Logo from "/src/User-Dashboard/assets copy/react.svg"


export function MainCustom(){
    return(
        <div className="mcustommian">
            <div className="mcustomcont">
                <img src={Logo} alt="" className="logo" />
                <p className="invitaionnation">Invitaion Nation</p>
                <div className="cusavtar"><BadgeAvatars/></div>
            </div>
            <div className="customizesecpart">
                
            </div> <HorizontalTabs/>
           
           
        </div>
    )
}