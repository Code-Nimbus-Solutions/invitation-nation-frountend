import BadgeAvatars from '../../MUI components/avatar';
import '../../../components/dash.css'
import  { Sidebar } from '../../MUI components/sidebar';



import { Websetup } from "../../MUI components/websetupcrd";
import Mobilehero from '../../Mobilecomponent/mobilehero';
import LabelBottomNavigation from '../../MUI components/Bottomnavigation';

export function Homepage(){
    return(
        <div className="mainhomepg">
            <div className="mobherodev">
                <Mobilehero/>
            </div>
            <div className="desktopdash">
                
            <p className="user">Hi , Andrie</p>
            <h1 className="heading">Welcome to our website!</h1>
            <div className="avtar">
                <BadgeAvatars className="Avatar"/>
            </div>
            </div>
          
          <Sidebar/>
          <div className="websetup">
            <Websetup/>
          </div>
            
            <div className="bottomnav" >
                <LabelBottomNavigation/>
            </div>
           
        </div>
    )
}