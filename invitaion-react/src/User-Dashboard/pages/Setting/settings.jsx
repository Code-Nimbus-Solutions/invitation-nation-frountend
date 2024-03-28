import { Sidebar } from "../../MUI components/sidebar";
import './setting.css'
import BadgeAvatars from "../../MUI components/avatar";
import VerticalTabs from "../../MUI components/Verticaltabs";
import LabelBottomNavigation from "../../MUI components/Bottomnavigation";
import '../../Mobilecomponent/mobhero.css'
import Navbar from "../../MUI components/Navbar";
import avtarstng from '/src/User-Dashboard/assets copy/react.svg'

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