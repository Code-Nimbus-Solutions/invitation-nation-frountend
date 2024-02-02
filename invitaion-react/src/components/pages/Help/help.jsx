import { Sidebar } from "../../MUI components/sidebar";
import '../../css files/help.css';
import BadgeAvatars from "../../MUI components/avatar";
import { Stack, Chip } from "@mui/material";
import { useState, useEffect } from "react";
import LabelBottomNavigation from "../../MUI components/Bottomnavigation";
function Message({ item }) {
  return (
    <div className="message">
      {/* Add your message rendering logic here */}
      {item}
    </div>
  );
}

export function Help() {
  const [inputmsg, setInputMsg] = useState([]);
  const [msgchng, setMsgChange] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMsgChange = (event) => {
    setMsgChange(event.target.value);
  };

  const handleSendMsg = () => {
    if (msgchng.trim() !== "") {
      setInputMsg((prevInputMsg) => [...prevInputMsg, msgchng.trim()]);
      setMsgChange(""); // Clear the input after sending
    }
  };

  const handleEnterKey = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // Prevent the default behavior of the Enter key
      handleSendMsg();
    }
  };
  const handleClearChat = () => {
    setInputMsg([]); // Clear all chat messages
  }

  // Load chat messages from localStorage on component mount
  useEffect(() => {
    const storedMessages = localStorage.getItem('chatMessages');
    if (storedMessages) {
      setInputMsg(JSON.parse(storedMessages));
    }
  }, []);

  // Save chat messages to localStorage whenever inputmsg changes
  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(inputmsg));
  }, [inputmsg]);

  return (
    <div className="helpmn">
      <Sidebar />
      <div className="fixedpos" >

     
      <div className="helpcont">
        <div className="mobvrsn">
          <p className="andrie">Hi, Andrie</p>
        <h1>Welcome to Invitation Nation</h1>
        </div>
        
        <div className="helptab">
          <h1 className="helpcinttab">Help And Support</h1>
          <Stack direction="row" spacing={1} sx={{ paddingTop: "1.7rem", paddingLeft: "-2rem" }}>
            <Chip label="WET3456" sx={{ color: "grey", backgroundColor: "#E5EAD7" }}className="chipcut" />
          </Stack>
          <div className="imgfls">
            <img src="/src/assets/Frame 3907.svg" alt="" className="srchhlp" onClick={handleClearChat}/>
            <img src="/src/assets/Frame 3988.svg" alt="" className="srchhlp2" />
           
          </div>
          <div className="dropdown">
          <div className="dropdown-container">
          <p className="dropdown-btn" onClick={() => setDropdownOpen(!isDropdownOpen)}>
           <img src="/src/assets/Menu Vertical.svg" alt="" className="menuvertical" />
          </p>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <p className="frst">Report bug</p>
              <p className="sec" onClick={handleClearChat}>Clear chat</p>
            </div>
          )}
        </div>

          </div>
        </div>

        <div className="avtar"  style={{position:"sticky",float:"right",marginTop:"-9rem",marginRight:"2rem",marginBottom:"10rem"}}>
          <BadgeAvatars className="Avatar" />
        </div> </div>

        <div className="msgcon">
          <textarea
            placeholder="Type a message..."
            name="message"
            className="msgarea"
            value={msgchng}
            onChange={handleMsgChange}
            onKeyDown={handleEnterKey}
          ></textarea>
          <img
            src="/src/assets/Frame 3908.svg"
            alt=""
            className="payment"
            
          />
          <img src="/src/assets/Frame 3922.svg" alt="" className="payment2"onClick={handleSendMsg} />
        </div>

        <div className="msgoutcont">
          {inputmsg.map((item, index) => (
            <div key={index} className="msgoutput">
              <h3 className="asgout" value={item}>{item}</h3>
            </div>
          ))}
        </div>
        <div className="bottomnav" >
                <LabelBottomNavigation/>
            </div>

      </div>
    </div>
  );
}
