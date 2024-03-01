import { Sidebar } from "../../MUI_components/sidebar";
import '../../css_files/wish.css'
import BadgeAvatars from "../../MUI_components/avatar";
import WishTabs from "../../MUI_components/Wishestabs";
import LabelBottomNavigation from "../../MUI_components/Bottomnavigation";
import Mobilehero from "../../Mobilecomponent/mobilehero";
import '../../Mobilecssfiles/mobhero.css'
import Navbar from "../../MUI_components/Navbar";



export function Templetes(){
    
    return(  
    <>
    <div className="templatemain" >
        <div className="wishside">
            <Sidebar/>
        </div>
        <div className="mobherodev">
                <Mobilehero/>
            </div>
        <div className="welcomhdng">
          <Navbar/>
        </div>
        
        

        <div className="wishtabs">
            <WishTabs/>
        </div>
        <div className="bottomnav" >
                <LabelBottomNavigation/>
            </div>
   
                   
                  
                  
          
              
        </div></>
    )
}