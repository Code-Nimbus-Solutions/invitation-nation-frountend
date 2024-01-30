import { Sidebar } from "../../MUI components/sidebar";
import '../../css files/setting.css'
import BadgeAvatars from "../../MUI components/avatar";
import VerticalTabs from "../../MUI components/Verticaltabs";

export function Setting(){
    return(
        <div className="settingmn">
            <Sidebar/>
          
 <div className="settingcont">
 <p className="andrie">Hi, Andrie</p>
        <h1>Welcome to Invitation Nation</h1> 
        
            <div className="setavtar">
            <BadgeAvatars/>
        </div></div>
       <div className="settingimgcont">
        <img src="/src/assets/react.svg" alt="" className="aavtarstng" />
            <p className="settingtxt">Dwane Jhonson</p>
        </div>

        <div className="tabssection">
            <VerticalTabs/>
        </div>
        
           

           
            
        </div>
    )
}