import { Sidebar } from "../../MUI components/sidebar";
import '../../css files/wish.css'
import BadgeAvatars from "../../MUI components/avatar";
import WishTabs from "../../MUI components/Wishestabs";



export function Templetes(){
    
    return(  
    <>
    <div className="templatemain" >
        <div className="wishside">
            <Sidebar/>
        </div>
        <div className="welcomhdng">
            <p>Hi andrie</p>
            <h2>Welcom to Invitaion Nation</h2>
        </div>
        <div className="wishavtar">
            <BadgeAvatars/>
        </div>

        <div className="wishtabs">
            <WishTabs/>
        </div>
   
                   
                  
                  
          
              
        </div></>
    )
}