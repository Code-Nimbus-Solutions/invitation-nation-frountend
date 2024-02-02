import { Sidebar } from "../../MUI components/sidebar";

import BasicTabs from "../../MUI components/TemplateTabs";
import LabelBottomNavigation from "../../MUI components/Bottomnavigation";
import Mobilehero from "../../Mobilecomponent/mobilehero";
import '../../Mobilecssfiles/mobhero.css'
export function Wishes(){
    return(
        <>
        <div className="templatemain" >
        <div className="mobherodev">
                <Mobilehero/>
            </div>
            <div className="tempcont">
                <Sidebar />
                <div className="mainttemptxt">
                    <div className="mobsec">
                        <p className="andretemp">Hi Andrei,</p>
    
              
                <h1 className="temp" style={{justifyContent:"center",width:"600px"}}>Welcome To invitation Nation</h1>
                    </div>
                    
                    
                <BasicTabs/>
               
               
            </div>
                   </div>
                   <div className="bottomnav" >
                <LabelBottomNavigation/>
            </div>
                  
                  
            </div></>
       
    )
}