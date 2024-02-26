import { Sidebar } from "../../MUI components/sidebar";
import '../../css files/setting.css'
import BadgeAvatars from "../../MUI components/avatar";
import VerticalTabs from "../../MUI components/Verticaltabs";
import LabelBottomNavigation from "../../MUI components/Bottomnavigation";
import '../../Mobilecssfiles/mobhero.css'
import Navbar from "../../MUI components/Navbar";

export function Setting(){
    return(
        <div className="settingmn">
            <div className="settngsidebar" style={{position:"fixed"}}>
                 <Sidebar/>
            </div>
           
  <Navbar/>
       <div className="settingimgcont">
        <img src="/src/assets/react.svg" alt="" className="aavtarstng" />
            <p className="settingtxt">Dwane Jhonson</p>
        </div>

        <div className="tabssection">
            <VerticalTabs/>
        </div>
        
           
        <div className="bottomnav" >
                <LabelBottomNavigation/>
            </div>
           
            
        </div>
    )
}