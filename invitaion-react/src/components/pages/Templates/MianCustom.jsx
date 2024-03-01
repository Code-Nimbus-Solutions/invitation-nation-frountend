
import HorizontalTabs from "../../MUI_components/customisehtabs";
import BadgeAvatars from "../../MUI_components/avatar";
import '../../css_files/custom.css'
import Logo from "/src/assets/react.svg"


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