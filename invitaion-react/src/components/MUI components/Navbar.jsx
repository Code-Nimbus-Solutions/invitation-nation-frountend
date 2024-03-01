import BadgeAvatars from "./avatar"
import '../css_files/setting.css'
export default function Navbar(){
    return(
        <div className="mainNavbar" style={{zIndex:9999}}>
             <div className="settingcont">
        <p className="andrie">Hi, Andrie</p>
        <h1>Welcome to Invitation Nation</h1> 
        
            <div className="setavtar">
            <BadgeAvatars/>
        </div></div>
        </div>
    )
}