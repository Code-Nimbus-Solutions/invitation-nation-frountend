import { Sidebar } from "../../MUI components/sidebar";

import BasicTabs from "../../MUI components/TemplateTabs";
import LabelBottomNavigation from "../../MUI components/Bottomnavigation";
import Mobilehero from "../../Mobilecomponent/mobilehero";
import '../../Mobilecssfiles/mobhero.css'
import Navbar from "../../MUI components/Navbar";
export function Wishes(){
    return(
        <>
        <div className="templatemain" >
        <div className="mobherodev">
                <Mobilehero/>
            </div>
            <div className="tempcont">
                <Sidebar />
                <div className="mainttemptxt" style={{ }}>
                    <div className="mobsec">
                        <Navbar/>
                    </div>
                    
                    <div className="basictabs">
                        <BasicTabs/>
                    </div>
                
               
               
            </div>
                   </div>
                   <div className="bottomnav" >
                <LabelBottomNavigation/>
            </div>
                  
                  
            </div></>
       
    )
}