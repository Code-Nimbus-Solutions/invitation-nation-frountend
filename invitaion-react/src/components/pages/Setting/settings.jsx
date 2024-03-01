import { Sidebar } from "../../MUI_components/sidebar";
import '../../css_files/setting.css'
import BadgeAvatars from "../../MUI_components/avatar";
import VerticalTabs from "../../MUI_components/Verticaltabs";
import LabelBottomNavigation from "../../MUI_components/Bottomnavigation";
import '../../Mobilecssfiles/mobhero.css'
import Navbar from "../../MUI_components/Navbar";
import avtarstng from '/src/assets/react.svg'

export function Setting(){
    return(
        <div className="settingmn">
            <div className="settngsidebar" style={{position:"fixed"}}>
                 <Sidebar/>
            </div>
           
  <Navbar/>
       <div className="settingimgcont">
        <img src={avtarstng} alt="" className="aavtarstng" />
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