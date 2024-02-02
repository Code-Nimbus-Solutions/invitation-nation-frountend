import { Sidebar } from "../../MUI components/sidebar";
import '../../css files/wish.css'
import BadgeAvatars from "../../MUI components/avatar";
import WishTabs from "../../MUI components/Wishestabs";
import LabelBottomNavigation from "../../MUI components/Bottomnavigation";
import Mobilehero from "../../Mobilecomponent/mobilehero";
import '../../Mobilecssfiles/mobhero.css'



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
            <p>Hi andrie</p>
            <h2>Welcom to Invitaion Nation</h2>
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